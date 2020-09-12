const constrollerUsuarios = require('../controllers/Usuarios');

module.exports = function(app) {
    const Usuarios = new constrollerUsuarios();

    app.get('/login', function(req, res) {
        Usuarios.logar(req, res);
    })
}