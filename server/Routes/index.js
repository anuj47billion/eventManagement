import express from 'express';
import userRoutes from './User';
import moduleRoutes from './Module';
import testimonialRoutes from './Testimonial';
import ResponseObject from '../Helpers/ResponseObject';

const router = express.Router();

/** GET /welcome - Welcome to Trello Clone API */
router.get('/welcome', (req, res) =>
  res.status(200).json(new ResponseObject(200, {
    message: 'Welcome to Event management API'
  }))
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount module routes at /modules
router.use('/modules', moduleRoutes);

// mount module routes at /testimonials
router.use('/testimonials', testimonialRoutes);

export default router;
