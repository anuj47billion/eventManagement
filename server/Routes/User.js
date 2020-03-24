import express from 'express';
import User from '../Controllers/User';

const router = express.Router();

router.route('/sociallogin')
  /* POST /v1.0/users/sociallogin - User Social login */
  .post(User.socialLogin);

router.route('/login')
  /* POST /v1.0/users/login - User login */
  .post(User.login);

  router.route('/register')
  /* POST /v1.0/users/register - User register */
  .post(User.register);

module.exports = router;
