// start a server

import express from 'express';
const app = express();
import path from 'path';
import url from 'url';

import authConfig from './auth-config.js';

const port = process.env.port || 8080;

app.use(express.static('client'));

app.listen(port, () => console.log(`The application is running on port ${port}!`));

app.get('/auth-config', (req, res)=>{
    res.json(authConfig)
});

app.use(express.static(path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../client')));
