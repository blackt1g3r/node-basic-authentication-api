﻿require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const basicAuth = require('_helpers/basic-auth');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use basic HTTP auth to secure the api
app.use(basicAuth);

// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = 8080;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
