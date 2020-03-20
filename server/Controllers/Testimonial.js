import db from '../../config/db';
import ResponseObject from '../Helpers/ResponseObject';

class Testimonials {
    static async getTestimonialsList(req, res, next) {
        try {
            const testimonials = await db.Testimonials.findAll({
                attributes: ['id', 'name', 'message', 'image_url']
            });
            res.status(200).json({data: testimonials});
        } catch (err) {
            next(err);
        }
    }
}

export default Testimonials;