const express = require('express')
const app = express();
const routes = require('./router/router')
const bodyParser = require('body-parser')
require('dotenv').config()

// parse application/json
app.use(bodyParser.json())

//PORT 
const PORT = process.env.PORT || 8000
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



app.use('/', routes)

//Starting server on port 
app.listen(PORT, () => console.log('Server is up and running now ...'))