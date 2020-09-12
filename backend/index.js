const server = require('./src/Server');

const app = server();

app.listen(4000, () => {
    console.log('Server on: 4000');
});

app.get('/', (req, res) => res.send('Hello World!'));
