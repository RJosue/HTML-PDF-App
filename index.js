const express = require('express');
const http = require('http');
const path = require('path');

const router = require('./src/router/router.js');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

const viewsDirect = path.join(__dirname, './views');
const publicDirect = path.join(__dirname, './public');

app.set('view engine', 'ejs');
app.set('views', viewsDirect);
app.use(express.static(publicDirect));

app.use('/', router);

server.listen(port, () => {
    console.log('SERVER RUNNING IN ' + port);
});