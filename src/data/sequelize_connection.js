const Sequelize = require('sequelize');

var sequelize = new Sequelize('nodepro', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        idleTimeoutMillis: 30000,
        min: 5,
        max: 20
    },
    define: {
        timestamp: false
    }
});

module.exports = sequelize;