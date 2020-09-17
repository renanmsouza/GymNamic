const constrollerModalidades = require('../controllers/Modalidades');

module.exports = function(app) {
    const Modalidades = new constrollerModalidades();

    app.get('/cadastros/modalidades/listar', function(req, res) {
        Modalidades.list(req, res);
    });

    app.get('/cadastros/modalidades/get', function(req, res) {
        Modalidades.get(req, res);
    });

    app.put('/cadastros/modalidades/', function(req, res) {
        Modalidades.set(req, res);
    });

    app.post('/cadastros/modalidades/', function(req, res) {
        Modalidades.post(req, res);
    });

    app.delete('/cadastros/modalidades/del', function(req, res) {
        Modalidades.del(req, res);
    });
}