const jwt = require('jsonwebtoken');
const settings = require('../../env');

const debug = require('debug')('eventManagement:Helpers/AuthJWT');

class Auth {
  constructor() {
    this.tokenKey = settings.APP_SECRET;
    this.tokenOptions = {
      expiresIn: settings.TOKEN_LIFE
    };
    this.payload = null;
  }

  generateToken() {
    const token = jwt.sign(this.payload, this.tokenKey, this.tokenOptions);
    debug(token);
    const returnData = {
      token: `JWT ${token}`
    };
    return returnData;
  }
}

module.exports = Auth;