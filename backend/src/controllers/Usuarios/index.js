const CRUDController = require('../../components/CRUDController');

class Usuarios extends CRUDController {
    constructor() {
        super('Usuarios', 'Usuarios');
    }

    async logar(req, res) {
        const { login, senha } = req.body;

        const model = await this.createModel();

        model.logar(login, senha)
            .then((rows) => {
                if (rows.length === 0) {
                    return res.status(401).json( rows );
                } else {
                    return res.status(200).json( rows );
                }
            })
            .catch((err) => {
                return res.status(400).json( err );
            }); 
            
        model.free();
    }
}

module.exports = Usuarios;