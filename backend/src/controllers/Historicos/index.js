// const ModelHistoricos = require('../../models/Historicos');
const CRUDController = require('../../components/CRUDController');

class Historicos extends CRUDController {
    constructor() {
        super('Historicos', 'Historicos');
    }
    
}

module.exports = Historicos;