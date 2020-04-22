const express = require('express');
const router = express.Router();
const locationsCtrl = require('../controllers/locations');

router.get('/locations/new', locationsCtrl.new);
router.post('/locations', locationsCtrl.create);
router.post('/courses/:id/locations', locationsCtrl.addToCourse);

module.exports = router;