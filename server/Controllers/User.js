import db from '../../config/db';
import ResponseObject from '../Helpers/ResponseObject';
import Jwt from '../Helpers/AuthJWT';
const debug = require('debug')('eventManagement: Controller/User');

class Users {

  static async login(req, res, next) {
    try {
      const post = req.body;

      if (!post.email) {
        res.status(404).json(new ResponseObject(404, 'Please Enter Email!'));
      }

      if(post.email){
        const userDetail = await db.Users.findOne({
          where: {
            email: post.email
          },
          raw: true,
          attributes: ['id', 'first_name', 'last_name', 'email']
        });

        if (userDetail) {
          const auth = new Jwt();
          const payloadQuery = {
            user_id: userDetail.id,
            first_name: userDetail.first_name,
            last_name: userDetail.last_name
          };
          auth.payload = {
            query: payloadQuery
          };
          const tokenObj = auth.generateToken();
          res.status(200).json(new ResponseObject(200, tokenObj));
        } else {
          const insertUser = await db.Users.create({
            first_name: 'XYZ',
            last_name: 'ZYX',
            email: post.email
          })

          if(insertUser){
            if(insertUser.id){
              const auth = new Jwt();
              const payloadQuery = {
                user_id: insertUser.id,
                first_name: insertUser.first_name,
                last_name: insertUser.last_name
              };
              auth.payload = {
                query: payloadQuery
              };
              const tokenObj = auth.generateToken();
              res.status(200).json(new ResponseObject(200, tokenObj));
            }
          }
        }
      }
    } catch (err) {
      next(err);
    }
  }
}
export default Users;
