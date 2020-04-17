var express = require('express');
var router = express.Router();
var passport = require('passport');

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google');
}


/* GET home page. */
router.get('/', isLoggedIn, function(req, res, next) {
  res.redirect('/instructors');
  // res.redirect('/students');
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

 // Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/instructors',
    failureRedirect : '/instructors'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/instructors');
});

module.exports = router;
