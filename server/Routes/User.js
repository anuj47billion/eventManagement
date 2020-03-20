import express from 'express';
import User from '../Controllers/User';

const router = express.Router();

router.route('/login')
  /* POST /v1.0/users/login - User login */
  .post(User.login);

module.exports = router;
