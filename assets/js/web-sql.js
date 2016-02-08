var db = openDatabase('mydb', '1.0', 'test_db', 8 * 1024 * 2048);
db.transaction(function(tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS DATAFORMS (fname, company, lname, website, email, dropdown1, password, phone, dropdown2, checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6, dropdown3, emailnews)');
});
function saveData() {
	var data = [];
	data[0] = document.getElementById("txtFname").value;
	data[1] = document.getElementById("txtCompany").value;
	data[2] = document.getElementById("txtLname").value;
	data[3] = document.getElementById("txtWebsite").value;
	data[4] = document.getElementById("txtEmail").value;
	data[5] = document.getElementById("dropdown1").value;
	data[6] = document.getElementById("txtPassword").value;
	data[7] = document.getElementById("txtPhone").value;
	data[8] = document.getElementById("dropdown2").value;
	data[9] = document.getElementById("checkbox1").checked;
	data[10] = document.getElementById("checkbox2").checked;
	data[11] = document.getElementById("checkbox3").checked;
	data[12] = document.getElementById("checkbox4").checked;
	data[13] = document.getElementById("checkbox5").checked;
	data[14] = document.getElementById("checkbox6").checked;
	data[15] = document.getElementById("dropdown3").value;
	data[16] = document.getElementById("receiveEmail").checked;
	var i = 0;
	var dataString = 'INSERT INTO DATAFORMS (fname, company, lname, website, email, dropdown1, password, phone, dropdown2, checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6, dropdown3, emailnews) VALUES (';
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
}
function addData(string) {
	db.transaction(function(tx) {
		tx.executeSql(string);
	});
}