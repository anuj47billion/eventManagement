// import app from './config/express';
const app = require('./config/express');
const db = require('./config/db');
const config = require('./env');

const port = process.env.PORT || config.PORT;

// connecting the database
db.sequelize.sync().then(() => {
  app.listen(port);
});