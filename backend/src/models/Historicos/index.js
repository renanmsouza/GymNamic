const CRUDModel = require('../../components/CRUDModel');

class Historicos extends CRUDModel {
    constructor(tableName) {
        super(tableName);
    }
}

module.exports = Historicos;