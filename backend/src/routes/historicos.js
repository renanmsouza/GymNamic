const constrollerHistoricos = require('../controllers/Historicos');

module.exports = function(app) {
    const Historicos = new constrollerHistoricos();

    app.get('/cadastros/historicos/listar', function(req, res) {
        Historicos.list(req, res);
    });

    // Informar chaves via Query
    app.get('/cadastros/historicos/get', function(req, res) {
        Historicos.get(req, res);
    });

    app.put('/cadastros/historicos/', function(req, res) {
        Historicos.set(req, res);
    });

    app.post('/cadastros/historicos/', function(req, res) {
        Historicos.post(req, res);
    });

    // Informar chaves via Query
    app.delete('/cadastros/historicos/del', function(req, res) {
        Historicos.del(req, res);
    });
}