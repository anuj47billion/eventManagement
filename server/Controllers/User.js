const db =require('../../config/db');
const ResponseObject =require('../Helpers/ResponseObject');

class Users {

  static login(req, res, next) {
    try {
      const post = req.body;
      console.log(post);
      
    } catch (err) {
      next(err);
    }
  }
}
module.exports = Users;
