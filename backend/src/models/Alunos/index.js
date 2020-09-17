const CRUDModel = require('../../components/CRUDModel');

class Alunos extends CRUDModel {
    constructor(tableName) {
        super(tableName);
    }
}

module.exports = Alunos;