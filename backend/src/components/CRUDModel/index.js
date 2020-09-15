const Database = require('../../Database');

class CRUDModel {
    // #Private 
        #conn;
    // _Protected
        _tableName;
        _keyList;
        _fieldList;
    // Public

    constructor(tableName) {
        this._tableName = tableName;
        this._keyList = [];
        this._fieldList = [];

        this.#conn = Database.connection();
    }

    free() {
        this.#conn.end();
    }

    // Recupera todos os campos da Tabela
    setFileldList() {
        return new Promise((resolve, reject) => {
            this.#conn.query({
                sql: 'SHOW columns FROM '+this._tableName,
                values: []
            }, 
            (err, rows) => {
                if (err) {
                    this._fieldList = [];
                    this._keyList = [];

                    resolve(false);
                } else {
                    for (let i = 0; i < rows.length; i++) {
                        let row = rows[i];
                        
                        if (row.Key === 'PRI') {
                            this._keyList.push(row.Field);
                        }else{
                            this._fieldList.push(row.Field);
                        }
                    }
    
                    resolve(true);
                }
            });
        })   
    }

    list() {
        return new Promise((resolve, reject) => {
            // list query
            let query = 'Select * from '+this._tableName;

            this.#conn.query({
                sql: query,
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
        return new Promise(async (resolve, reject) => {
            var query = '';
            // get query
            await this.setFileldList()
                .then(() => {
                    query = 'Select * from '+this._tableName+' Where '
                    for(let i = 0; i < this._keyList.length; i++) {
                        if (i > 1) {
                            query = query + ' and '
                        }
                        
                        query = query + this._keyList[i] + ' = ?';
                    }
                });
            
            this.#conn.query({
                sql: query, 
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
        return new Promise(async (resolve, reject) => {
            var query = '';
            // set query
            await this.setFileldList()
                .then(() => {
                    // Fields
                    query = 'Update '+this._tableName+' set ';
                    for (let i = 0; i < this._fieldList.length; i++) {
                        if (i > 1) {
                            query = query + ', '
                        }
                        
                        query = query + this._keyList[i] + ' = ?';    
                    }
                    // Where
                    query = query + ' Where ';
                    for (let i = 0; i < this._keyList.length; i++) {
                        if (i > 1) {
                            query = query + ' and '
                        }
                        
                        query = query + this._keyList[i] + ' = ?';    
                    }
                });
            
            this.#conn.query({
                sql: query,
                values: data
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
            // post query
            let query = 'Insert into ' + this._tableName+ ' set ?'

            this.#conn.query({
                sql: query,
                values: [data]
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
            var query = '';
            //del query
            await this.setFileldList()
                .then(() => {
                    query = 'Delete from ' + this._tableName+ ' Where ';
                    for (let i = 0; i < this._keyList.length; i++) {
                        if (i > 1) {
                            query = query + ' and '
                        }
                        
                        query = query + this._keyList[i] + ' = ?';    
                    }
                });
            
            this.#conn.query({
                sql: query,
                values: data
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

module.exports = CRUDModel;