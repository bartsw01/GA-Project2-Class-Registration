const express = require('express');
const router = express.Router();
const studentsCtrl = require('../controllers/students');

router.get('/students/new', studentsCtrl.new);
router.post('/students', studentsCtrl.create);
router.post('/courses/:id/students', studentsCtrl.addToStudentList);





// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('students', { title: 'Student Page' });
//   // res.redirect('/students');
// });

module.exports = router;