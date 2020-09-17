const constrollerGraduacao = require('../controllers/Graduacao');

module.exports = function(app) {
    const Graduacao = new constrollerGraduacao();

    app.get('/cadastros/graduacao/listar', function(req, res) {
        Graduacao.list(req, res);
    });

    app.get('/cadastros/graduacao/get', function(req, res) {
        Graduacao.get(req, res);
    });

    app.put('/cadastros/graduacao/', function(req, res) {
        Graduacao.set(req, res);
    });

    app.post('/cadastros/graduacao/', function(req, res) {
        Graduacao.post(req, res);
    });

    app.delete('/cadastros/graduacao/del', function(req, res) {
        Graduacao.del(req, res);
    });
}