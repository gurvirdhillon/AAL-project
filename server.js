// start a server
const express = require('express');
const app = express();
const path = require('path');
const url = require('url');
// const authConfig = require('./server/auth-config.js');

// import authConfig from './server/auth-config.js';

const port = process.env.port || 8080;

app.use(express.static('public'));

app.listen(port, () => console.log(`The application is running on port ${port}!`));

app.get('/auth-config', (req, res)=>{
    res.json(authConfig)
});

// app.use(express.static(path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../public')));
