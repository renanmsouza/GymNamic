const Database = require('../../Database');

class Graduacao {
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

    list() {
        return new Promise((resolve, reject) => {
            this.#conn.query({
                sql: 'Select * from Graduacao',
                values: []
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

    get(graduacao) {
        return new Promise((resolve, reject) => {
            this.#conn.query({
                sql: 'Select * from Graduacao Where idGraduacao = ?',
                values: [graduacao.idGraduacao]
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

    set(graduacao) {
        return new Promise((resolve, reject) => {
            this.#conn.query({
                sql: 'Update Graduacao set Descricao = ?, Nivel = ?, Cor = ?'+
                ' Where idGraduacao = ?',
                values: [graduacao.Descricao, graduacao.Nivel, graduacao.Cor, graduacao.idGraduacao]
            }, 
            (err, rows) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(rows.affectedRows);
                }
            });
        })
    }

    post(graduacao) {
        return new Promise((resolve, reject) => {
            this.#conn.query({
                sql: 'Insert into Graduacao set ?',
                values: [graduacao]
            }, 
            (err, rows) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(rows.affectedRows);
                }
            });
        })
    }

    del(graduacao) {
        return new Promise((resolve, reject) => {
            this.#conn.query({
                sql: 'Delete from Graduacao Where idGraduacao = ?',
                values: [graduacao.idGraduacao]
            }, 
            (err, rows) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(rows.affectedRows);
                }
            });
        })
    }
}

module.exports = Graduacao;