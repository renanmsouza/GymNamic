const constrollerAlunos = require('../controllers/Alunos');

module.exports = function(app) {
    const Alunos = new constrollerAlunos();

    app.get('/cadastros/alunos/listar', function(req, res) {
        Alunos.list(req, res);
    });

    app.get('/cadastros/alunos/:id', function(req, res) {
        Alunos.get(req, res);
    });

    app.put('/cadastros/alunos/', function(req, res) {
        Alunos.set(req, res);
    });

    app.post('/cadastros/alunos/', function(req, res) {
        Alunos.post(req, res);
    });

    app.delete('/cadastros/alunos/:id', function(req, res) {
        Alunos.del(req, res);
    });
}