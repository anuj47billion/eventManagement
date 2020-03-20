import express from 'express';
import Module from '../Controllers/Module';

const router = express.Router();

router.route('/')
  .get(Module.getModulesList);

module.exports = router;
