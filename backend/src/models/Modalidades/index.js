const Database = require('../../Database');

class Alunos {
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
                sql: 'Select * from Modalidades',
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
                sql: 'Select * from Modalidades Where idModalidades = ?',
                values: [modalidade.idModalidades]
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
                sql: 'Update Modalidades set Descricao = ?'+
                ' Where idModalidades = ?',
                values: [modalidade.Descricao, modalidade.idModalidades]
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
                sql: 'Insert into Modalidades set ?',
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
                sql: 'Delete from Modalidades Where idModalidades = ?',
                values: [modalidade.idModalidades]
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

module.exports = Alunos;