// start a server
const express = require('express');
const app = express();
const port = 8080;

// const authConfig = require('./server/auth-config');



app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/auth-config', (req, res)=>{
    res.json(authConfig)
});


