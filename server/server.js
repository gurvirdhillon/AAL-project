import express from 'express';
const app = express();
import path from 'path';
import url, { fileURLToPath } from 'url';
import authConfig from './auth-config.js';
import { openDB } from './db-sqlite.mjs';
import * as http from 'http';
import io from 'socket.io-client';

const server = http.createServer(app);

export const socket = io('http://localhost:8080');
socket.on('connect', () => {
    console.log('connected');
    socket.emit('message', 'Hello users!');
});

const db = openDB();
const port = process.env.port || 8080;

app.use(express.static('client'));

app.listen(port, () => console.log(`The application is running on port ${port}!`));

app.get('/auth-config', (req, res)=>{
    res.json(authConfig)
});

app.post('/send-message', (req, res) => {
    console.log(req.body);
    res.send('Message received');
});

async function getUser(req, res) {
    const feedback = await db.getUser(req.params.user_email);
    // handdle response
    if(feedback) {
        res.status(404).send('User not found');
        return;
    } if(!feedback) {
        res.json(feedback);
    }
    res.json(feedback);
}

app.get('/user_profile/:user_email', async (req, res) => {
    const feedback = await getUser(req.params.user_email);
    // handle response
    if(feedback) {
        res.json(feedback);
    } else {
        res.status(404).send('User not found');
    }
});

function catchError(catchErr) {
    return (req, res, next) => {
      Promise.resolve(catchErr(req, res, next))
        .catch((e) => next(e || new Error()));
    };
}
app.get('/api/getUser/:user_email', catchError(getUser));

app.use(express.static('client', { extensions: ['html'] }));
app.use(express.static(path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../client')));

