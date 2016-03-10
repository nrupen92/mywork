var db = openDatabase('mydb', '1.0', 'test_db', 8 * 1024 * 2048);
db.transaction(function(tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS USERS2 (number, color)');
});
function saveData() {
	var data = [];
	data[0] = document.getElementById("userColor").value;
	data[1] = document.getElementById("userNumber").value;
	var i;
	var dataString = 'INSERT INTO USERS2 (color, number) VALUES (';
	for (i = 0; i < data.length; i++) {
		// alert(data[i]);
		if (i == (data.length - 1)) {
			dataString = dataString + '\"' + String(data[i]) + '\"';
		} else {
			dataString = dataString + '\"' + String(data[i]) + '\",';
		}
	}
	dataString = dataString + ')';
	addData(dataString);
	getData();
}
function addData(string) {
	db.transaction(function(tx) {
		tx.executeSql(string);
	});
}

function getData() {
	db.transaction(function (tx) {
		   tx.executeSql('SELECT * FROM USERS2', [], function (tx, results) {
		      var len = results.rows.length, i;
		      
		      for (i = 0; i < len; i++){
		         alert("Number: "+results.rows.item(i).number+"\nColor: "+results.rows.item(i).color);
		      }
			
		   }, null);
		});
}