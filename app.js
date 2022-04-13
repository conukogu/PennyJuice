const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mysql = require('mysql')

const path = require('path');

const port = process.env.PORT || 3000;

//bc778fd640b8ba:78a7b63d@us-cdbr-east-05.cleardb.net/heroku_f62ce51aa2ee177?

const db_config = {
  host: "us-cdbr-east-05.cleardb.net",
  user: "bc778fd640b8ba",
  password: "78a7b63d",
  database: "heroku_f62ce51aa2ee177"
};

const db=mysql.createPool({ connectionLimit: 5, ...db_config})


// if (process.env.NODE_ENV === "production"){
    app.use(express.static('build'));

    app.get("", (req, res) => {
        req.sendFile(path.resolve)(__dirname, 'build', 'index.html')
    })
// }


 app.use(bodyParser.urlencoded({extended: true}));


app.get("/form", (req, res) => {
const insertQ = "SELECT * FROM heroku_f62ce51aa2ee177.dummydata;";
db.query(insertQ, (err, result) => {
    res.send(result);
});
});

app.listen(port, (err) =>{
    if (err) return console.log(err);
    console.log('Server running on port:', port)
})

