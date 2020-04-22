const Location = require('../models/location');
const Course = require('../models/course');


function newLocation(req, res) {
    Location.find({}, function (err, locations) {
      res.render('locations/new', {
        title: 'Add Location',
        locations
      });
    })
  }

  function create(req, res) {
      Location.create(req.body, function (err, location) {
          res.redirect('/locations/new');
      })
  }

  function addToCourse(req, res) {
    // Course.findById(req.params.id, function (err, course) {
    //   course.push(req.body.locationId);
    //   course.save(function (err) {
    //     res.redirect(`/courses/${course._id}`);
    //   });
    // });
  }













module.exports = {
    new: newLocation,
    create, 
    addToCourse
    
  };