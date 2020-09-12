const mysql = require('mysql');

class Database {
	static connection (){
		return mysql.createConnection({
			host : 'cottonsheep.com.br',
			user : 'cotton82_admin',
			password : 'Cottonsheep1793*',
			database : 'cotton82_DBGymNamic',
			multipleStatements: true
		});
	}
}

module.exports = Database;