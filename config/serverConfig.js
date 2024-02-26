require('dotenv').config();

module.exports = {
    APP_PORT: process.env.APP_PORT,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    CALLBACK_URL: process.env.CALLBACK_URL,
    DATABASE_URL : process.env.MONGO_URL
}