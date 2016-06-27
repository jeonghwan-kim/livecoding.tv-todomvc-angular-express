'use strict';

const express = require('express')
    , app = express()
    , logger = require('morgan')
    , bodyParser = require('body-parser')
    , path = require('path');

app.use('/', express.static(path.join(__dirname, '../client')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routing
app.use('/api', require('./api'));


app.listen(3000, () => console.log('Example app listening on port 3000!'));
