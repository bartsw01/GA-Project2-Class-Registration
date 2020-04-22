var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var Instructor = require('../models/instructor');

passport.use(
    new GoogleStrategy(
    {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Instructor.findOne({ 'googleId': profile.id }, function(err, instructor) {
        if (err) return cb(err);
        if (instructor) {
          return cb(null, instructor);
        } else {
            console.log(profile, "HELLO OAUth!");
          // we have a new student via OAuth!
          var newInstructor = new Instructor({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id
          });
          newInstructor.save(function(err) {
            if (err) return cb(err);
            return cb(null, newInstructor);
          });
        }
      });
  }
));

passport.serializeUser(function(instructor, done) {
    done(null, instructor.id);
});

passport.deserializeUser(function(id, done) {
    Instructor.findById(id, function(err, instructor) {
      done(err, instructor);
    });
  });