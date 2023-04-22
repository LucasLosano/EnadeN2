var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var calculos = require('./routes/calculos');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/calculos', calculos);

app.listen(3000, ()=>{console.log("Server port 3000 is running")})
module.exports = app;
