import express from 'express';
import Testimonial from '../Controllers/Testimonial';

const router = express.Router();

router.route('/')
  .get(Testimonial.getTestimonialsList);

module.exports = router;
