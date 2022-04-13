const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 3000;



const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));






// let server = app.listen();

// server.on("clientError", (err, socket) => {
//   console.error(err);
//   socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
// });




if (process.env.NODE_ENV === "production"){
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        req.sendFile(path.resolve)(__dirname, 'build', 'index.html')
    })
}






const db_config = {
  host: "us-cdbr-east-05.cleardb.net",
  user: "b9516b8ecb5df4",
  password: "98b86dc7",
  database: "heroku_63d645c21d33683",
};

const db = mysql.createPool({connectionLimit: 5, ...db_config});

app.get("/form", (req, res) => {
  const insertQ = "SELECT * FROM heroku_63d645c21d33683.dummydata;";
  db.query(insertQ, (err, result) => {
    res.send(result);
  });
});



app.listen(port, (err) =>{
    if (err) return console.log(err);
    console.log('Server running on port:', port)
})

