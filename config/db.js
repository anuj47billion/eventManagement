import Sequelize from 'sequelize';
import env from '../env';

import User from '../server/Models/users';
import Module from '../server/Models/modules';
import Testimonial from '../server/Models/testimonials';
import Product from '../server/Models/products';

const Op = Sequelize.Op;
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, null, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: 'mysql',
  dialectOptions: {
    multipleStatements: true
  },
  define: {
    underscored: true
  },
  operatorAliases: Op,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Connect all the models/tables in the database to a db object,
// so everything is accessible via one object

const models = {
  Users: User(sequelize, Sequelize),
  Modules: Module(sequelize, Sequelize),
  Testimonials: Testimonial(sequelize, Sequelize),
  Products: Product(sequelize, Sequelize),
};

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

const db = {
  ...models,
  sequelize,
  Sequelize,
  Op
};

export default db;
