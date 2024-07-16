process.env.UV_THREADPOOL_SIZE = 4;

const cluster = require('cluster');
const crypto = require('crypto');

if (cluster.isMaster) {
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
} else {
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hey, Cody.');
        });
    });

    app.get('/fast', (req, res) => {
        res.send('Fast.');
    });

    app.listen(3000);
}
