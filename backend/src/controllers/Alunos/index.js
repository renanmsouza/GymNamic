const CRUDController = require('../../components/CRUDController');

class Alunos extends CRUDController {
    constructor() {
        super('Alunos', 'Alunos');
    }
}

module.exports = Alunos;