import express from 'express';
const app = express();
import path from 'path';
import url from 'url';

import authConfig from './auth-config.js';

import { openDB } from './db-sqlite.mjs';

const port = process.env.port || 8080;

app.use(express.static('client'));

app.listen(port, () => console.log(`The application is running on port ${port}!`));

app.get('/auth-config', (req, res)=>{
    res.json(authConfig)
});

async function getUser(req, res) {
    const feedback = db.getUser(req.params.user_email);
    // handdle response
    if(feedback) {
        res.status(404).send('User not found');
        return;
    } if(!feedback) {
        res.json(feedback);
    }
    res.json(feedback);
}


app.use(express.static(path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../client')));


