class CRUDController {
    // #Private
        #Model;
    // _Protected
        _tableName;

    constructor(tableName, className) {
        this.#Model = require('../../models/'+className);
        this._tableName = tableName;
    }

    createModel() {
        return new Promise((resolve, reject) => {
            resolve(new this.#Model(this._tableName));
        })
    }

    async list(req, res) {
        const model = await this.createModel();

        await model.list()
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

        const model = await this.createModel();

        await model.get(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }

    async set(req, res) {
        const {  keys, fields } = req.body;
        const data = [...Array(Object.values(fields)), ...Array(Object.values(keys))];

        const model = await this.createModel();

        await model.set(data)
            .then((rows) => {
                return res.status(201).json({ affectedRows: rows });
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }

    async post(req, res) {
        var data = req.body;

        const model = await this.createModel();

        await model.post(data)
            .then((rows) => {
                return res.status(201).json({ affectedRows: rows });
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }

    async del(req, res) {
        var data = [req.params.id];

        const model = await this.createModel();

        await model.del(data)
            .then((rows) => {
                return res.status(201).json({ affectedRows: rows });
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
}

module.exports = CRUDController;