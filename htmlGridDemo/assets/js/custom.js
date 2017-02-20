var dataView;
var grid;
var data = [];
var priceFormatter = function(row, cell, value, columnDef, dataContext) {
	if (value > 90) {
		return "<span class='load-hi'>" + value + "</span>";
	} else if (value > 70) {
		return "<span class='load-medium'>" + value + "</span>";
	} else {
		return value + "";
	}
}

var sizeFormatter = function(row, cell, value, columnDef, dataContext) {
	if (value > 5) {
		return "<span class='load-hi'>" + value + "</span>";
	} else if (value > 3) {
		return "<span class='load-medium'>" + value + "</span>";
	} else {
		return value + "";
	}
}
var columns = [ {
	id : "symbol",
	name : "symbol",
	field : "symbol",
	sortable : true,

}, {
	id : "last_price",
	name : "last_price",
	field : "last_price",
	sortable : true,
	formatter : priceFormatter
}, {
	id : "last_size",
	name : "last_size",
	field : "last_size",
	sortable : true,
	formatter : sizeFormatter
},

];

var options = {
	editable : true,
	enableColumnReorder : true,
	enableAddRow : true,
	enableCellNavigation : true,
	asyncEditorLoading : true,
	forceFitColumns : true,
	topPanelHeight : 25
};

var sortcol = "title";
var sortdir = 1;
var percentCompleteThreshold = 0;
var searchString = "";

function requiredFieldValidator(value) {
	if (value == null || value == undefined || !value.length) {
		return {
			valid : false,
			msg : "This is a required field"
		};
	} else {
		return {
			valid : true,
			msg : null
		};
	}
}

function myFilter(item, args) {
	if (item["percentComplete"] < args.percentCompleteThreshold) {
		return false;
	}

	if (args.searchString != ""
			&& item["title"].indexOf(args.searchString) == -1) {
		return false;
	}

	return true;
}

function percentCompleteSort(a, b) {
	return a["percentComplete"] - b["percentComplete"];
}

function comparer(a, b) {
	var x = a[sortcol], y = b[sortcol];
	return (x == y ? 0 : (x > y ? 1 : -1));
}

function toggleFilterRow() {
	grid.setTopPanelVisibility(!grid.getOptions().showTopPanel);
}

$(".grid-header .ui-icon").addClass("ui-state-default ui-corner-all")
		.mouseover(function(e) {
			$(e.target).addClass("ui-state-hover")
		}).mouseout(function(e) {
			$(e.target).removeClass("ui-state-hover")
		});
