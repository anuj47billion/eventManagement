const express = require('express');
const Testimonial = require('../Controllers/Testimonial');

const router = express.Router();

router.route('/')
  .get(Testimonial.getTestimonialsList);

module.exports = router;
