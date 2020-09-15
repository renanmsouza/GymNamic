const ModelHistoricos = require('../../models/Historicos');

class Historicos {
    createModel(tableName) {
        return new Promise((resolve, reject) => {
            resolve(new ModelHistoricos(tableName));
        })
    }

    async list(req, res) {
        const model = await this.createModel('Historicos');

        model.list()
            .then((rows) => {
                return res.status(200).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }

    async get(req, res) {
        var data = [req.params.id];

        const model = await this.createModel('Historicos');

        await model.get(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }

    async post(req, res) {
        var data = req.body;

        const model = await this.createModel('Historicos');

        model.post(data)
            .then((rows) => {
                return res.status(201).json({ affectedRows: rows });
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
}

module.exports = Historicos;