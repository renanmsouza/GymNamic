const constrollerUsuarios = require('../controllers/Usuarios');

module.exports = function(app) {
    const Usuarios = new constrollerUsuarios();

    app.get('/cadastros/usuarios/listar', function(req, res) {
        Usuarios.list(req, res);
    });

    app.get('/cadastros/usuarios/get', function(req, res) {
        Usuarios.get(req, res);
    });

    app.put('/cadastros/usuarios/', function(req, res) {
        Usuarios.set(req, res);
    });

    app.post('/cadastros/usuarios/', function(req, res) {
        Usuarios.post(req, res);
    });

    app.delete('/cadastros/usuarios/del', function(req, res) {
        Usuarios.del(req, res);
    });

    app.get('/login', function(req, res) {
        Usuarios.logar(req, res);
    })
}