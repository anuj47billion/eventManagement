const hat =require('hat');
const db =require('../../config/db');
const ResponseObject =require('../Helpers/ResponseObject');

const Op = db.Op;
const debug = require('debug')('eventManagement: Controller/User');

class Users {

  /**
   * Login verification of user
   * @params req.body{email_id,password}
   * @return Promise
   */


  static async login(req, res, next) {
    try {
      const post = req.body;
      const userDetail = await db.Users.findOne({
        where: {
          email: post.email
        },
        raw: true,
        attributes: ['password', 'salt', 'user_id', 'first_name', 'last_name', 'email_verified', 'is_active']
      });

      // if (userDetail) {
      //   const isActive = userDetail.is_active;
      //   const emailVerified = userDetail.email_verified;
      //   // const pmHelper = new PasswordManager();
      //   pmHelper.salt = userDetail.salt;
      //   pmHelper.inputedPassword = post.password;
      //   pmHelper.existingPassword = userDetail.password;
      //   if (pmHelper.verifyPassword()) {
      //     if (isActive === 0 || emailVerified === 0) {
      //       const statusMessage = (isActive === 0) ? Message.accountDeactivated : Message.emailNotVerified;
      //       res.status(200).json(new ResponseObject(500, statusMessage));
      //     } else {
      //       const auth = new Jwt();
      //       const payloadQuery = {
      //         user_id: userDetail.user_id,
      //         first_name: userDetail.first_name,
      //         last_name: userDetail.last_name
      //       };
      //       auth.payload = {
      //         query: payloadQuery
      //       };
      //       const tokenObj = auth.generateToken();
      //       res.status(200).json(new ResponseObject(200, Message.loggedIn, tokenObj));
      //     }
      //   } else {
      //     res.status(200).json(new ResponseObject(500, Message.wrongEmail));
      //   }
      // } else {
      //   res.status(200).json(new ResponseObject(500, Message.wrongEmail));
      // }
    } catch (err) {
      next(err);
    }
  }
}
module.exports = Users;
