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
                sql: 'Select * from Alunos',
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

    get(aluno) {
        return new Promise((resolve, reject) => {
            this.#conn.query({
                sql: 'Select * from Alunos Where idAlunos = ?',
                values: [aluno.idAlunos]
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

    set(aluno) {
        return new Promise((resolve, reject) => {
            this.#conn.query({
                sql: 'Update Alunos set idModalidades = ?, idGraduacao = ?, Nome = ?, DataNascimento = ?, CPF = ?,'+ 
                ' RG = ?, Cel = ?, Fone = ?, Email = ?, Sexo = ?, Status = ?, CEP = ?, Rua = ?, Numero = ?, Bairro = ?,'+ 
                ' Cidade = ?, Estado = ?, Obs = ?'+
                ' Where idAlunos = ?',
                values: [aluno.idModalidades, aluno.idGraduacao, aluno.Nome, aluno.DataNascimento, aluno.CPF, aluno.RG, aluno.Cel, 
                    aluno.Fone, aluno.Email, aluno.Sexo, aluno.Status, aluno.CEP, aluno.Rua, aluno.Numero, aluno.Bairro, 
                    aluno.Cidade, aluno.Estado, aluno.Obs, aluno.idAlunos]
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

    post(aluno) {
        return new Promise((resolve, reject) => {
            this.#conn.query({
                sql: 'Insert into Alunos set ?',
                values: [aluno]
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

    del(aluno) {
        return new Promise((resolve, reject) => {
            this.#conn.query({
                sql: 'Delete from Alunos Where idAlunos = ?',
                values: [aluno.idAlunos]
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