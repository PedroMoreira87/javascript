const express = require('express');
const xmlparser = require('express-xml-bodyparser');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// create the server
const app = express();

// apply configurations to the express server, add middlewares (body-parser, morgan, cors)
app.use(xmlparser());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// DB local (execution time)
const data = [];

// creation of a route that will be accessed using the method HTTP GET/
// http://localhost:9000/
app.get('/', (req, res) => {
    return res.json({data});
});

// creation of a route that will be accessed using the method HTTP POST/
// http://localhost:9000/add
app.post('/', (req, res) => {
    const result = req.body;

    if (!result) {
        return res.status(400).end();
    }

    console.log('Raw XML: ' + req.rawBody);
    console.log('Parsed XML: ' + JSON.stringify(req.body));

    data.push(result);
    return res.json({result});
});

app.listen(80, () => console.log('Express started at http://localhost:80'));
// node .\node\webhookConnection\endpoint.ts
// using localtunnel to run a localhost to be detected by the webhook > lt --subdomain test --port 80
