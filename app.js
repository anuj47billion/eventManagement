const express = require('express');
const app = express();
const db = require('./util/database');

const sequelize = require('./src/data/sequelize_connection');

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// db.execute('SELECT * FROM users')
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });


app.set('port', process.env.PORT || 8000);

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(app.get('port'));

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))