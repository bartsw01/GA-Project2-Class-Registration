var express = require('express');
var router = express.Router();
const coursesCtrl = require('../controllers/courses');


router.get('/', coursesCtrl.index);
router.get('/new', coursesCtrl.new);
router.get('/:id', coursesCtrl.show)
router.post('/', coursesCtrl.create);
router.get('/edit', coursesCtrl.edit);
// router.delete('/', coursesCtrl.delete);

module.exports = router;