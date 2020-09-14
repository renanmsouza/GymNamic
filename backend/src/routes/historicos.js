const constrollerHistoricos = require('../controllers/Historicos');

module.exports = function(app) {
    const Historicos = new constrollerHistoricos();

    app.get('/cadastros/historicos/listar', function(req, res) {
        Historicos.list(req, res);
    });

    app.get('/cadastros/historicos/:id', function(req, res) {
        Historicos.get(req, res);
    });

    app.put('/cadastros/historicos/', function(req, res) {
        Historicos.set(req, res);
    });

    app.post('/cadastros/historicos/', function(req, res) {
        Historicos.post(req, res);
    });

    app.delete('/cadastros/historicos/:id', function(req, res) {
        Historicos.del(req, res);
    });
}