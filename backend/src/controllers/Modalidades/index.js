const ModelModalidades = require('../../models/Modalidades');

class Modalidades {
    // #Private 
    // _Protected
    // Public

    list(req, res) {
        const modelModalidades = new ModelModalidades();

        modelModalidades.list()
            .then((rows) => {
                return res.status(200).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        modelModalidades.free();
    }

    get(req, res) {
        var modalidade = [];
        modalidade.idModalidades = req.params.id;

        const modelModalidades = new ModelModalidades();

        modelModalidades.get(modalidade)
            .then((rows) => {
                return res.status(200).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        modelModalidades.free();
    }

    set(req, res) {
        var modalidade = req.body;

        const modelModalidades = new ModelModalidades();

        modelModalidades.set(modalidade)
            .then((rows) => {
                return res.status(200).json({ affectedRows: rows });
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        modelModalidades.free();
    }

    post(req, res) {
        var modalidade = req.body;

        const modelModalidades = new ModelModalidades();

        modelModalidades.post(modalidade)
            .then((rows) => {
                return res.status(201).json({ affectedRows: rows });
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        modelModalidades.free();
    }

    del(req, res) {
        var modalidade = [];
        modalidade.idModalidades = req.params.id;

        const modelModalidades = new ModelModalidades();

        modelModalidades.del(modalidade)
            .then((rows) => {
                return res.status(200).json({ affectedRows: rows });
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        modelModalidades.free();
    }
}

module.exports = Modalidades;