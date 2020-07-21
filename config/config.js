require('dotenv').config();

// const config = require('./config.json');

// const environment = process.env.NODE_ENV || 'development';

const finalConfig = process.env;

// let corsconfig = {
//   credentials: process.env.CorsCredentials,
//   origin: process.env.CorsOrigin
// };

// finalConfig["CorsSettings"] = corsconfig;

// if (environment === 'development') {

//     finalConfig = config.development;

// }

// else {

//     finalConfig['PORT'] = process.env.PORT;
//     finalConfig['DbUrl'] = process.env.DbUrl;
//     finalConfig['JwtSecret'] = process.env.JwtSecret;
//     let corsconfig = {
//         credentials: process.env.CorsCredentials,
//         origin: "*"
//     }
//     finalConfig['CorsSettings'] = corsconfig;
//     finalConfig['stripeSecret'] = process.env.stripeSecret;

// }

// const finalConfig = _.merge(defaultConfig, environmentConfig);

module.exports = finalConfig;
