var express = require('express');
var router = express.Router();
const coursesCtrl = require('../controllers/courses');

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }


router.get('/', isLoggedIn, coursesCtrl.index);
router.get('/new', isLoggedIn, coursesCtrl.new);
// router.get('/show/:id', isLoggedIn, coursesCtrl.show)
router.get('/show/:id', coursesCtrl.show)
router.post('/', isLoggedIn, coursesCtrl.create);
router.get('/edit/:id', coursesCtrl.edit);
router.put('/:id', coursesCtrl.update);
router.delete('/:id', isLoggedIn, coursesCtrl.delete);

module.exports = router;