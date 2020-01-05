const express = require('express');
const userRoutes = require('./User');
const ResponseObject = require('../Helpers/ResponseObject');

const router = express.Router();

/** GET /welcome - Welcome to Trello Clone API */
router.get('/welcome', (req, res) =>
  res.status(200).json(new ResponseObject(200, {
    message: 'Welcome to Event management API'
  }))
);

// mount user routes at /users
router.use('/users', userRoutes);

module.exports = router;
