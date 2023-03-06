import express from 'express';
import path from 'path';
import url, { fileURLToPath } from 'url';
import authConfig from './auth-config.js';
import { openDB } from './db-sqlite.mjs';
import passport from 'passport';
const app = express();
import twilio from 'twilio';
import oauth2orize from 'oauth2orize';
import bearerStrategy from 'passport-http-bearer';

import { FitbitOAuth2Strategy as FitbitStrategy } from 'passport-fitbit-oauth2';

passport.use(new FitbitStrategy({
  clientID: '2398HV',
  clientSecret: '229f30978777f329164493cc79491671',
  callbackURL: 'http://localhost:8080/auth/fitbit/callback',
  authorizationURL: 'https://www.fitbit.com/oauth2/authorize',
  tokenURL: 'https://api.fitbit.com/oauth2/token',
  userProfileURL: 'https://api.fitbit.com/1/user/-/profile.json'
  },
  function(accessToken, refreshToken, profile, complete) {
    const options = {
      url: 'https://api.fitbit.com/1/user/-/profile.json',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    };
    request.get(options, function(err, response, body) {
      if (err) {
        return done(err);
      }
      const data = JSON.parse(body);
      User.findOrCreate({ fitbitId: data.user.encodedId }, function (err, user) {
        return complete(err, user);
      });
    });
  }  
));

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser((id, done) => {
  db.get('SELECT * FROM user WHERE user_id = ?', [id], (err, row) => {
    if (err) {
      return done(err);
    }
    done(null, row);
  });
});

const server = oauth2orize.createServer();
server.exchange(oauth2orize.exchange.clientCredentials((client, scope, done) => {
  db.get('SELECT * FROM user WHERE user_id = ? AND fitbit_id = ?', [user.user_id, user.fitbit_id], (err, row) => {
    if(err){
      return done(err);
    } if(!err){
      return done(null, false);
    }
    const token = generateToken();
    db.run('INSERT INTO tokens (user_id, access_token, refresh_token) VALUES (?, ?, ?)', [tokens.user_id, tokens.access_token, tokens.refresh_token], (err) => {
      if(err){
        return done(err);
      } if(!err){
        return done(null, false);
        }
      });
    });
}));

server.authorization((user_id, refresh_token, scope, done) => {
  db.get('SELECT * FROM user WHERE user_id = ? AND refresh_token = ?', [user.user_id, user.refresh_token], (err, row) => {
    if(err){
      return done(err);
    }
    if(!err){
      return done(null, false);
    }
    return done(null, row.user_id, row.refresh_token);
  });
});

passport.use(new bearerStrategy((accessToken, done) => {
  db.get('SELECT * FROM user WHERE user_id = ?', [accessToken], (err, row) => {
    if(err){
      return done(err);
    } if(!err){
      return done(null, false);
    }
    return done(null, row.user_id);
  })
}));

app.use(passport.initialize());

app.get('/authorize', server.authorize((clientId, refresh_token, done) => {
  req.session.clientId = clientId;
}));

// npm. (2016). Passport-fitbit-oauth2. https://www.npmjs.com/. Retrieved from https://www.npmjs.com/package/passport-fitbit-oauth2 

// need to import medication.js
// import twilio from 'twilio'.twiml.voiceResponse;

const db = openDB();
const port = process.env.port || 8080;

app.use(express.static('client'));

app.listen(port, () => console.log(`The application is running on port ${port}!`));

app.get('/auth-config', (req, res)=> {
    res.json(authConfig)
});

const accountSid = "ACf25d4feac6b0fd768188a7f2d54f5583";
const authToken = "3562338dc6f76a2f6a83f6a4eddddec4";
// const authToken = "229f30978777f329164493cc79491671";
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

// accept the reminder.html page as a url parameter when type in localhost:8080/reminder.html

app.post('/call', (req, res) =>{
  if(client){
    console.log('Call has been requested');
  }
  client.messages.create(
    {
      body: 'A call has been requested',
      from: '+447893943882',
      to: '+447908632941'
    }
  ).then(message => {
    console.log(message.sid);
    res.send({ message: 'Message sent' });
  }).catch(err => {
  console.log(err);
  res.status(500).send({ error: 'Failed to send message' });
})
});

async function getUser(req, res) {
  const feedback = await db.getUser(req.params.user_email);
  // handdle response
  if (feedback) {
    res.status(404).send('User not found');
    return;
  } if (!feedback) {
    res.json(feedback);
  }
  res.json(feedback);
}

app.get('/user/:email', async (req, res) => {
  const feedback = await db.getUser(req.params.email);
  // handle response
  if (feedback) {
    res.json(feedback);
  } else {
    res.status(404).send('User not found');
  }
})

app.get('/auth/fitbit', passport.authenticate('fitbit', { scope: ['activity', 'heartrate', 'sleep', 'weight'] }));

app.get('/auth/fitbit/callback',
  passport.authenticate('fitbit', { failureRedirect: '/login' }),
  (req, res) => {
    const clientId = req.session.clientId;
    delete req.session.clientId;
    res.redirect(`/authorize?client_id=${clientId}&user_id=${req.user.user_id}`);
});

function catchError(catchErr) {
  return (req, res, next) => {
    Promise.resolve(catchErr(req, res, next))
      .catch((e) => next(e || new Error()));
  };
}

app.post('/reminder', (req, res) => {
  const sqlite = { reminder_desc, reminder_date} = req.body;
  const reminder = {
    reminder_desc: reminder.reminder_desc,
    reminder_date: reminder.reminder_date
  };
});

app.get('/api/getUser/:user_email', catchError(getUser));

app.use(express.static('client', { extensions: ['html'] }));
app.use(express.static(path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../client')));
