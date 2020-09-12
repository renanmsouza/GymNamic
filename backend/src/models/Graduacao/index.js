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

    get(modalidade) {
        return new Promise((resolve, reject) => {
            this.#conn.query({
                sql: 'Select * from Graduacao Where idGraduacao = ?',
                values: [modalidade.idGraduacao]
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

    set(modalidade) {
        return new Promise((resolve, reject) => {
            this.#conn.query({
                sql: 'Update Graduacao set Descricao = ?'+
                ' Where idGraduacao = ?',
                values: [modalidade.Descricao, modalidade.idGraduacao]
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

    post(modalidade) {
        return new Promise((resolve, reject) => {
            this.#conn.query({
                sql: 'Insert into Graduacao set ?',
                values: [modalidade]
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

    del(modalidade) {
        return new Promise((resolve, reject) => {
            this.#conn.query({
                sql: 'Delete from Graduacao Where idGraduacao = ?',
                values: [modalidade.idGraduacao]
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