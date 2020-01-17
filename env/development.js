const devConfig = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 8080,
  DATABASE_URL: process.env.DATABASE_URL || 'jdbc:mysql://localhost:3306/eventmanagement',
  DATABASE_NAME: process.env.DATABASE_NAME || 'eventmanagement',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'root',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
  DATABASE_PORT: process.env.DATABASE_PORT || 3306,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',
  APP_SECRET: '3c0880de0c0ae9cebdad97d1e129c0005a19b1e99d24e3beb57b2fca296ca0bbd1bf288942322dd7fdeed595c8c5e60a',
  TOKEN_LIFE: 604800, // in seconds i.e 7 days
  // MAIL_ID: 'example@gmail.com',
  // MAIL_PASS: '123456789',
  // IMAGE_PATH: 'Path of storage',
  IMAGE_URL: 'http://localhost/eventmanagement/public/images/',
  DOMAIN_IP: 'http://localhost:8089/v1.0/',
  APIVERSION: 'v1.0',
  TITLE: 'Event Management',
  NAME: 'Event Management Backend'
};

module.exports = devConfig;
