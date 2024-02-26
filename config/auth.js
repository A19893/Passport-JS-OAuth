const passport = require("passport");
const { CLIENT_ID, CLIENT_SECRET, CALLBACK_URL } = require("./serverConfig");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
passport.use(
  new GoogleStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth',
    },
    function (accessToken, refreshToken, profile, cb) {
      cb(null, profile);
    }
  )
);

passport.serializeUser(function(user, cb){
    cb(null, user)
})

passport.deserializeUser(function(obj, cb){
    cb(null, obj)
})

module.exports = passport;
