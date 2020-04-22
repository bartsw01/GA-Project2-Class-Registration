var router = require('express').Router();
var instructorsCtrl = require('../controllers/instructors');


router.get('/instructors', instructorsCtrl.index);



module.exports = router;