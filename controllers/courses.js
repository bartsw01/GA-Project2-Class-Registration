const Course = require('../models/course');

const newCourse = (req, res) => {
    res.render('courses/new');
}

const create = (req, res) => {
    console.log(req.body)
  const course = new Course(req.body);
  course.save(function(err) {
    // one way to handle errors
    if (err)
      return res.render('courses/new');
    else {
      console.log(course);
      res.redirect('/courses');
    }
  });
}

const index = (req, res) => {
    Course.find({}, (err, flights) =>{
        res.render('courses/index', {courses });
    });
}

module.exports = {
    index: index,
    new: newCourse,
    create 
}