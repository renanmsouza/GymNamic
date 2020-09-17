const CRUDModel = require('../../components/CRUDModel');

class Usuarios extends CRUDModel {
    constructor(tableName) {
        super(tableName);
    }

    logar(login, senha) {
        return new Promise((resolve, reject) => {
            this._conn.query({
                sql: 'Select * from Usuarios Where Login = ? and Senha = ?',
                values: [login, senha]
            }, 
            (err, rows) => {
                if (err) {
                    reject(err);
                }else {
                    console.log(rows);
                    resolve(rows);
                }
            });
        })
    }
}

module.exports = Usuarios;