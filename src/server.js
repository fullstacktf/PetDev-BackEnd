const express = require("express");
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

const router = express.Router();

const app = express();


app.use(express.json());

// Connection to DB

mongoose.connect('mongodb://localhost/mongocrud', { useNewUrlParser: true })
    .then(db=> console.log('DB connection was successful'))
    .catch(err => console.log(err));

// Settings

app.set('port', process.env.PORT || 3000);
const port = app.get('port');

// Middlewares

app.use(morgan('dev'));




// Run the server

app.listen(3000, () => console.log(`Server on port ${port}`));


// Hello World test

/* app.get("/", function showAll(req, res){

    res.send('Hello World!');
  }); */
