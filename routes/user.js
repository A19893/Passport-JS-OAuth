const express =  require('express');
const { user_controller } = require('../controllers');
const passport = require('../config/auth')
const router = express.Router();

router.get('/login', user_controller.login)

router.get('/auth/google', passport.authenticate("google", {scope: ["profile","email"]}));

router.get('/auth', passport.authenticate("google", {failureRedirect: "/login"}), user_controller.authentication);

router.get('/logout', user_controller.logout)
module.exports = router;