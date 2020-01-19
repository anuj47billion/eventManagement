const express = require('express');
const Module = require('../Controllers/Module');

const router = express.Router();

router.route('/')
  .get(Module.getModulesList);

module.exports = router;
