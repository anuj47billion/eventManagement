import db from '../../config/db';
import ResponseObject from '../Helpers/ResponseObject';
import Jwt from '../Helpers/AuthJWT';
import PasswordManager from "../Helpers/PasswordManager";
import Message from "../Helpers/Message";
class Users {

  static async socialLogin(req, res, next) {
    try {
      const post = req.body;

      if (!post.email) {
        res.status(404).json(new ResponseObject(404, Message.noEmail));
      }

      if (post.email) {
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

          if (insertUser) {
            if (insertUser.id) {
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

  static async login(req, res, next) {
    try {
      const post = req.body;

      if (!post.email) {
        res.status(404).json(new ResponseObject(404, Message.noEmail));
      }

      if (post.email) {
        const userDetail = await db.Users.findOne({
          where: {
            email: post.email
          },
          raw: true,
          attributes: ['id', 'first_name', 'last_name', 'email', 'password', 'salt']
        });

        if (userDetail) {
          const pmHelper = new PasswordManager();
          pmHelper.salt = userDetail.salt;
          pmHelper.inputedPassword = post.password;
          pmHelper.existingPassword = userDetail.password;

          if (pmHelper.verifyPassword()) {
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
            res.status(200).json(new ResponseObject(500, Message.wrongEmail));
          }
        } else {
          res.status(200).json(new ResponseObject(500, Message.wrongEmail));
        }
      }
    } catch (err) {
      next(err)
    }
  }

  static async register(req, res, next) {
    try {
      const post = req.body;

      if (!post.email || !post.password || !post.first_name || !post.last_name) {
        res.status(404).json(new ResponseObject(404, 'Please Enter All Information!'));
      }

      if (post.email && post.password && post.first_name && post.last_name) {
        const userDetail = await db.Users.findOne({
          where: {
            email: post.email
          },
          raw: true,
          attributes: ['id', 'first_name', 'last_name', 'email']
        })

        if (userDetail) {
          res.status(404).json(new ResponseObject(404, 'Email already present!'));
        } else {
          const pmHelper = new PasswordManager();
          pmHelper.txtPassword = post.password;
          const passwordObj = pmHelper.createPasswordHash();
          post.password = passwordObj.password;
          post.salt = passwordObj.salt;

          try {
            const insertUser = await db.Users.create(post);

            if (insertUser.id) {
              res.status(200).json(new ResponseObject(200, 'User Registered Successfully!', post));
            } else {
              res.status(404).json(new ResponseObject(404, 'Something went wrong!'));
            }
          } catch (err) {
            next(err)
          }
        }
      }
    } catch (err) {
      next(err)
    }
  }
}
export default Users;
