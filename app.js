import app from './config/express';
import db from './config/db';
import config from './env';

const port = process.env.PORT || config.PORT;

// connecting the database
db.sequelize.sync().then(() => {
  app.listen(port);
});