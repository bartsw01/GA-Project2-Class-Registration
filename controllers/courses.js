const Course = require('../models/course');
const Instructor = require('../models/instructor');




const index = (req, res) => {
  Course.find({}, (err, courses) => {
      res.render('courses/index', {
        title: 'All Courses', 
        courses 
      });
  });
}

const show = (req, res) => {
  Course.findById(req.params.id)
  .populate('studentList').exec(function(err, course) {
    Student.find({_id: {$nin: course.studentList}}).exec(function(err, students) {
      console.log(students);
      res.render('courses/show', {
        title: 'Course Detail', 
        course, 
        students,
      });
    });
  });
}

const newCourse = (req, res) => {
    res.render('courses/new', { title: 'Add Course'});
}

const create = (req, res) => {
    console.log(req.body)
  const course = new Course(req.body);
  course.save(function(err) {
    // one way to handle errors
    if (err) return res.render('/courses/new');
    res.redirect('/courses/${courses/${course._id}');
  });
}



module.exports = {
  index,
  show,
  new: newCourse,
  create 
}