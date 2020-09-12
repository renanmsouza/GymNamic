const ModelUsuarios = require('../../models/Usuarios');

class Usuarios {
    // #Private 
    // _Protected
    // Public

    logar (req, res) {
        const { login, senha } = req.body;

        const modelUsuarios = new ModelUsuarios();

        modelUsuarios.logar(login, senha)
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
            
        modelUsuarios.free();
    }
}

module.exports = Usuarios;