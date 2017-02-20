$(function() {
	// prepare the data
	for (var i = 0; i < 50; i++) {
		var d = (data[i] = {});

		d["id"] = "id_" + i;
		d["symbol"] = "Symbol " + i;
		d["last_size"] = Math.round(Math.random() * 10);
		d["last_price"] = Math.round(Math.random() * 100);
	}

	dataView = new Slick.Data.DataView({
		inlineFilters : true
	});
	grid = new Slick.Grid("#myGrid", dataView, columns, options);
	grid.setSelectionModel(new Slick.RowSelectionModel());

	var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));
	var columnpicker = new Slick.Controls.ColumnPicker(columns, grid, options);

	// move the filter panel defined in a hidden div into grid top panel
	$("#inlineFilterPanel").appendTo(grid.getTopPanel()).show();

	grid.onCellChange.subscribe(function(e, args) {
		dataView.updateItem(args.item.id, args.item);
	});

	grid.onAddNewRow.subscribe(function(e, args) {
		var item = {
			"num" : data.length,
			"id" : "new_" + (Math.round(Math.random() * 10000)),
			"title" : "New task",
			"duration" : "1 day",
			"percentComplete" : 0,
			"start" : "01/01/2009",
			"finish" : "01/01/2009",
			"effortDriven" : false
		};
		$.extend(item, args.item);
		dataView.addItem(item);
	});

	grid.onKeyDown.subscribe(function(e) {
		// select all rows on ctrl-a
		if (e.which != 65 || !e.ctrlKey) {
			return false;
		}

		var rows = [];
		for (var i = 0; i < dataView.getLength(); i++) {
			rows.push(i);
		}

		grid.setSelectedRows(rows);
		e.preventDefault();
	});

	grid.onSort.subscribe(function(e, args) {
		sortdir = args.sortAsc ? 1 : -1;
		sortcol = args.sortCol.field;

		if ($.browser.msie && $.browser.version <= 8) {
			// using temporary Object.prototype.toString override
			// more limited and does lexicographic sort only by default, but can
			// be much faster

		} else {
			// using native sort with comparer
			// preferred method but can be very slow in IE with huge datasets
			dataView.sort(comparer, args.sortAsc);
		}
	});

	// wire up model events to drive the grid
	dataView.onRowCountChanged.subscribe(function(e, args) {
		grid.updateRowCount();
		grid.render();
	});

	dataView.onRowsChanged.subscribe(function(e, args) {
		grid.invalidateRows(args.rows);
		grid.render();
	});

	dataView.onPagingInfoChanged.subscribe(function(e, pagingInfo) {
		var isLastPage = pagingInfo.pageNum == pagingInfo.totalPages - 1;
		var enableAddRow = isLastPage || pagingInfo.pageSize == 0;
		var options = grid.getOptions();

		if (options.enableAddRow != enableAddRow) {
			grid.setOptions({
				enableAddRow : enableAddRow
			});
		}
	});

	var h_runfilters = null;

	// wire up the slider to apply the filter to the model
	$("#pcSlider,#pcSlider2").slider({
		"range" : "min",
		"slide" : function(event, ui) {
			Slick.GlobalEditorLock.cancelCurrentEdit();

			if (percentCompleteThreshold != ui.value) {
				window.clearTimeout(h_runfilters);
				h_runfilters = window.setTimeout(updateFilter, 10);
				percentCompleteThreshold = ui.value;
			}
		}
	});

	// wire up the search textbox to apply the filter to the model
	$("#txtSearch,#txtSearch2").keyup(function(e) {
		Slick.GlobalEditorLock.cancelCurrentEdit();

		// clear on Esc
		if (e.which == 27) {
			this.value = "";
		}

		searchString = this.value;
		updateFilter();
	});

	function updateFilter() {
		dataView.setFilterArgs({
			percentCompleteThreshold : percentCompleteThreshold,
			searchString : searchString
		});
		dataView.refresh();
	}

	$("#btnSelectRows").click(function() {
		if (!Slick.GlobalEditorLock.commitCurrentEdit()) {
			return;
		}

		var rows = [];
		for (var i = 0; i < 10 && i < dataView.getLength(); i++) {
			rows.push(i);
		}

		grid.setSelectedRows(rows);
	});

	// initialize the model after all the events have been hooked up
	dataView.beginUpdate();
	dataView.setItems(data);
	dataView.setFilterArgs({
		percentCompleteThreshold : percentCompleteThreshold,
		searchString : searchString
	});
	dataView.setFilter(myFilter);
	dataView.endUpdate();

	// if you don't want the items that are not visible (due to being filtered
	// out
	// or being on a different page) to stay selected, pass 'false' to the
	// second arg
	dataView.syncGridSelection(grid, true);

	$("#gridContainer").resizable();

	function simulateRealTimeUpdates() {
		var changes = {};
		var numberOfUpdates = Math.round(Math.random() * (data.length / 10));
		for (var i = 0; i < numberOfUpdates; i++) {
			var symbol = Math.round(Math.random() * (data.length - 1));
			var cpu = Math.round(Math.random() * (columns.length - 1));
			var delta = Math.round(Math.random() * 50) - 25;
			data[symbol]["last_price"] = Math.round(Math.random() * 100);
			data[symbol]["last_size"] = Math.round(Math.random() * 10);
			if (!changes[symbol]) {
				changes[symbol] = {};
			}
			changes[symbol]["last_price"] = "changed";
			changes[symbol]["last_size"] = "changed";
			grid.invalidateRow(symbol);
		}
		grid.setCellCssStyles("highlight", changes);
		grid.render();
		setTimeout(simulateRealTimeUpdates, 500);
	}

	simulateRealTimeUpdates();
})