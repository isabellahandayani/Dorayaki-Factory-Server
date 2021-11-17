require('dotenv').config();
const winston = require('winston');
const nodemailer = require('nodemailer');

module.exports = {
    development: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        gmailSender: process.env.GMAIL_NODEMAILER,
        gmailTransporter: nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_NODEMAILER,
                pass: process.env.GMAIL_PASSWORD_NODEMAILER,
            }
        }),
        dialect: 'mysql',
        logging: winston.debug,
    },
};