const ModelAlunos = require('../../models/Alunos');

class Alunos {
    // #Private 
    // _Protected
    // Public

    list(req, res) {
        const modelAlunos = new ModelAlunos();

        modelAlunos.list()
            .then((rows) => {
                return res.status(200).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        modelAlunos.free();
    }

    get(req, res) {
        var aluno = [];
        aluno.idAlunos = req.params.id;

        const modelAlunos = new ModelAlunos();

        modelAlunos.get(aluno)
            .then((rows) => {
                return res.status(200).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        modelAlunos.free();
    }

    set(req, res) {
        var aluno = req.body;

        const modelAlunos = new ModelAlunos();

        modelAlunos.set(aluno)
            .then((rows) => {
                return res.status(200).json({ affectedRows: rows });
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        modelAlunos.free();
    }

    post(req, res) {
        var aluno = req.body;

        const modelAlunos = new ModelAlunos();

        modelAlunos.post(aluno)
            .then((rows) => {
                return res.status(201).json({ affectedRows: rows });
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        modelAlunos.free();
    }

    del(req, res) {
        var aluno = [];
        aluno.idAlunos = req.params.id;

        const modelAlunos = new ModelAlunos();

        modelAlunos.del(aluno)
            .then((rows) => {
                return res.status(200).json({ affectedRows: rows });
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        modelAlunos.free();
    }
}

module.exports = Alunos;