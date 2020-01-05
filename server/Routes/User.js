const express = require('express');
const User = require('../Controllers/User');

const router = express.Router();

router.route('/login')
  /* POST /v1.0/users/login - User login */
  .post(User.login);

module.exports = router;
