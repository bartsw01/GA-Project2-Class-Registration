const Instructor = require('../models/instructor');



function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  Instructor.find(modelQuery)
  .sort(sortKey).exec(function(err, instructors) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('instructors/index', { 
      instructors, 
      user: req.user,
      name: req.query.name, 
      sortKey });
  });
}

// function addFact(req, res, next) {
  
// }

// function delFact(req, res, next) {

// }

module.exports = {
  index,
  
};