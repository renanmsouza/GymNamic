const Database = require('../../Database');

class DefaultCRUD {
    // #Private 
        #conn;
        #sql;
    // _Protected
        _tableName;
        _keyList;
        _fieldList;
    // Public

    constructor(tableName) {
        this._tableName = tableName;
        this.#sql = [];

        this.#conn = Database.connection();

        this.#setFileldList();
        this.#makeSQL();
    }

    free() {
        this.#conn.end();
    }

    // Recupera todos os campos da Tabela
    #setFileldList() {
        this.#conn.query({
            sql: 'SHOW columns FROM ?',
            values: [this._tableName]
        }, 
        (err, rows) => {
            if (err) {
                this._fieldList = [];
                this._keyList = [];
            }else {
                for (let i = 0; i < rows.length; i++) {
                    let row = rows[i];

                    if (row.Key = 'PRI') {
                        this._keyList.push(row.Field);
                    }else{
                        this._fieldList.push(row.Field);
                    }
                }
            }
        });    
    }

    // Constroi as Querys 
    #makeSQL() {
        // List
        this.#sql.list = 'Select * from '+this._tableName;

        // get
        this.#sql.get = 'Select * from '+this._tableName+' Where '
        for(let i = 0; i < this._keyList.length; i++) {
            if (i > 1) {
                this.#sql.get = this.#sql.get + ' and '
            }
            
            this.#sql.get = this.#sql.get + this._keyList[i] + ' = ?';
        }

        // set
        this.#sql.set = 'Update '+this._tableName+' set ';
        for (let i = 0; i < this._fieldList.length; i++) {
            if (i > 1) {
                this.#sql.set = this.#sql.set + ', '
            }
            
            this.#sql.set = this.#sql.set + this._keyList[i] + ' = ?';    
        }

        this.#sql.set = this.#sql.set + ' Where ';
        for (let i = 0; i < this._keyList.length; i++) {
            if (i > 1) {
                this.#sql.set = this.#sql.set + ' and '
            }
            
            this.#sql.set = this.#sql.set + this._keyList[i] + ' = ?';    
        }

        // post
        this.#sql.post = 'Insert into ' + this._tableName+ ' set ?'

        //del
        this.#sql.del = 'Delete from ' + this._tableName+ ' Where ';
        for (let i = 0; i < this._keyList.length; i++) {
            if (i > 1) {
                this.#sql.del = this.#sql.del + ' and '
            }
            
            this.#sql.del = this.#sql.del + this._keyList[i] + ' = ?';    
        }
    }

    list() {
        return new Promise((resolve, reject) => {
            this.#conn.query({
                sql: this.#sql.list,
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

    get(data) {
        return new Promise((resolve, reject) => {
            this.#conn.query({
                sql: this.#sql.get,
                values: data
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

    set(data) {
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

    post(data) {
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

    del(data) {
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

module.exports = DefaultCRUD;