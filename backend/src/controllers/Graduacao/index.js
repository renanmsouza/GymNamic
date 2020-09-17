const CRUDController = require('../../components/CRUDController');

class Graduacao extends CRUDController {
    constructor() {
        super('Graduacao', 'Graduacao');
    }
}

module.exports = Graduacao;