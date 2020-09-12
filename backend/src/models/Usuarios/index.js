const Database = require('../../Database');

class Usuarios {
    // #Private 
        #conn;
    // _Protected
    // Public

    constructor() {
        this.#conn = Database.connection();
    }

    free() {
        this.#conn.end();
    }

    logar (login, senha) {
        return new Promise((resolve, reject) => {
            this.#conn.query({
                sql: 'Select * from Usuarios Where Login = ? and Senha = ?',
                values: [login, senha]
            }, 
            (err, rows) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(rows);
                }
            });
        })
    }
}

module.exports = Usuarios;