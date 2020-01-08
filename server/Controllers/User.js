const db = require('../../config/db');
const ResponseObject = require('../Helpers/ResponseObject');
const Jwt = require('../Helpers/AuthJWT');
const debug = require('debug')('eventManagement: Controller/User');

class Users {

  static async login(req, res, next) {
    try {
      const post = req.body;
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
          console.log('insertUser');
          console.log(insertUser);
        }
      }
      
    } catch (err) {
      next(err);
    }
  }
}
module.exports = Users;
