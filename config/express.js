const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const config = require('../env');
const cors = require('cors');
const routes = require('../server/Routes');

const app = express();

if (config.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// mount all routes on /v1.0 path
app.use(`/${config.APIVERSION}`, routes);

// enable CORS - Cross Origin Resource Sharing
app.use(cors({
  origin: true,
  methods: 'GET, POST, OPTIONS, PUT, DELETE, PATCH',
  allowedHeaders: 'Origin, Content-Type, Accept, Authorization, X-Request-With, Content-Range, Content-Disposition, Content-Description, multipart, multipart/form-data',
  credentials: true,

}));

module.exports = app;
