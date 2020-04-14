var router = require('express').Router();
var studentsCtrl = require('../controllers/students');

const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

// GET /students
router.get('/', isLoggedIn, studentsCtrl.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
router.post('/facts', studentsCtrl.addFact);

// DELETE /facts/:id
router.delete('/facts/:id', studentsCtrl.delFact);

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('students', { title: 'Student Page' });
//   // res.redirect('/students');
// });

module.exports = router;