import express from 'express';
const app = express();
import path from 'path';
import url, { fileURLToPath } from 'url';
import authConfig from './auth-config.js';
import { openDB } from './db-sqlite.mjs';
import http from "http";
import { Server } from "socket.io";
import * as uuid from 'uuid';
import *  as eRemind from '../client/reminder.js';

const server = http.createServer();
const io = new Server(server);

io.on('connection', socket => {
  console.log('new user');
  socket.emit('message', 'Hello users!');
});

server.listen(3000);

const db = openDB();
const port = process.env.port || 8080;

app.use(express.static('client'));

app.listen(port, () => console.log(`The application is running on port ${port}!`));

app.get('/auth-config', (req, res)=>{
    res.json(authConfig)
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

app.get('/api/reminders', (req, res) => {
    res.json(reminders);
});

app.get('/api/reminders/:id', (req, res) => {
    for(const reminder of reminders) {
        if(reminder.id === req.params.id) {
            res.json(reminder);
            return;
        }
    }
    res.status(404).send('Sorry we are struggling to find this reminder.');
});

app.post('/api/reminders', express.json(), (req, res) => {
    const newReminder = {
        id: uuid,
        reminder: req.body.reminder,
        date: Date()
    };
    reminders = [newReminder, ...reminders.slice(0, 9)];
    res.json(newReminder);
});

function getReminders(req, res) {
    res.json(eRemind.listReminders());
}

function getReminder(req, res) {
    const feedback = eRemind.findReminder(req.params.id);
    if(feedback) {
        res.json(feedback);
        return;
    } else {
        res.status(404).send('Sorry we are struggling to find this reminder.');
        return;
    }
    res.json(feedback);
}

function postReminder(req, res) {
    const rmndr = eRemind.addReminder(req.body);
    res.json(rmndr);
}

app.get('/reminder', getReminders);
app.get('/reminder/:id', getReminder);
app.post('/reminder', express.json(), postReminder);

app.get('/api/getUser/:user_email', catchError(getUser));

app.use(express.static('client', { extensions: ['html'] }));
app.use(express.static(path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../client')));

