import express from 'express';
const app = express();
import path from 'path';
import url, { fileURLToPath } from 'url';
import authConfig from './auth-config.js';
import { openDB } from './db-sqlite.mjs';

const db = openDB();
const port = process.env.port || 8080;

app.use(express.static('client'));

app.listen(port, () => console.log(`The application is running on port ${port}!`));

app.get('/auth-config', (req, res)=> {
    res.json(authConfig)
});

import twilio from 'twilio';

const accountSid = "ACf25d4feac6b0fd768188a7f2d54f5583";
const authToken = "3562338dc6f76a2f6a83f6a4eddddec4";
const client = twilio(accountSid, authToken);

app.post('/send-message', (req, res) => {
    if(client){
        console.log('Twilio message has been sent');
    }
    client.messages
        .create({
            body: 'Help me!',
            from: '+447893943882',
            to: '+447908632941'
        })
        .then(message => {
            console.log(message.sid);
            res.send({ message: 'Message sent' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({ error: 'Failed to send message' });
        });
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
