var router = require('express').Router();
var instructorsCtrl = require('../controllers/instructors');

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

// GET /instructors
router.get('/', isLoggedIn, instructorsCtrl.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
router.post('/courses', instructorsCtrl.addCourse);

// DELETE /courses/:id
router.delete('/courses/:id', instructorsCtrl.delCourse);

// Need UPDATE or EDIT Function

module.exports = router;