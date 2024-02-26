const express= require('express');
const { APP_PORT } = require("./config/serverConfig");
const session = require('express-session');
const ejs = require('ejs');
const path = require('path');
const passport = require('./config/auth');
const setupAndStartServer = async()=>{
    const app = express();
    app.use(express.urlencoded({limit:'50mb',extended: true}));
    app.use(express.json({limit:'50mb', extended: true}));
    app.use(express.static(path.join(__dirname, "views")))
    app.set("view engine", "ejs");
    app.use(session({
        secret: "secret_key",
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false
        }
    }))
    app.use(passport.initialize()); 
    app.use(passport.session());
    require('./config').db_connection;

    app.use('/', require('./routes'));
    
    app.listen(APP_PORT,function () {
        console.clear();
        console.log(`Server listening on port ${APP_PORT}`);
    });
}

setupAndStartServer();