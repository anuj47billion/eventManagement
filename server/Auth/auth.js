/**
 * Verifying JWT
 * @params req.user
 * @return status
 */


// eslint-disable-next-line consistent-return
function Auth(req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({
      message: 'Unauthorized user!'
    });
  }
}

export default Auth;
