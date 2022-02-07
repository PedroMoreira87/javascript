const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors')
const app = express();
const mysql = require('mysql');

// npm run devStart to run the application
app.use(cors());
app.use(express.json())
app.use(bodyparser.urlencoded({extended: true}));

// MYSQL commands for granting node.js access
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
// flush privileges;
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'tec_dev_web_tde',
});

db.connect((err) => {
    if (!err)
        console.log('DB connection succeeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

app.get('/api/get', (req, res) => {

    const sqlSelect = "SELECT * FROM register"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
});

app.post('/api/insert', (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const gender = req.body.gender;

    const sqlInsert = "INSERT INTO register (first_name, last_name, email, phone, gender) VALUES (?, ?, ?, ?, ?)"
    db.query(sqlInsert, [firstName, lastName, email, phone, gender], (err, result) => {
        console.log(result)
    })
});

app.listen(3001, () => console.log('Express server is running at port no : 3001'));
