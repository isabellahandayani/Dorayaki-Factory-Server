require('dotenv').config();
const winston = require('winston');

module.exports = {
    development: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        dialect: 'mysql',
        logging: winston.debug,
    },
};