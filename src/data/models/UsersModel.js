import Sequelize from 'sequelize';
import { db } from '../sequelize_connection';

db.define('users', {
  id: {
      type: Sequelize.INTEGER,
      field: 'id',
      primaryKey: true,
      autoIncrement: true
  },
  // title: {
  //     type: Sequelize.TEXT,
  //     field: 'skill_title'
  // }
})

const UsersModel = db.models.users;

export { UsersModel };