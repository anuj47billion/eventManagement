 const path = require('path');

 const { NODE_ENV } = process.env

 const env = NODE_ENV || 'development';
 const config = require(`./${env}`); // eslint-disable-line import/no-dynamic-require

 const defaults = {
   root: path.join(__dirname, '/..')
 };

 export default Object.assign(defaults, config);
