const Student = require('../models/student');
const Course = require('../models/course');



const newStudent = (req, res) => {
  Student.find({}, function (err, students) {
    res.render('students/new', {
      title: 'Add Students',
      students
    });
  })
}

const create = (req, res) => {
  // Need to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  const s = req.body.born;
  req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
  Students.create(req.body, function (err, student) {
    res.redirect('/students/new');
  });
}

const addToStudentList = (req, res) => {
  Course.findById(req.params.id, function (err, course) {
    course.studentList.push(req.body.studentId);
    course.save(function (err) {
      res.redirect(`/courses/${course._id}`);
    });
  });
}

module.exports = {
  new: newStudent,
  create,
  addToStudentList,
};




// function deleteStudent(req, res, next) {
//   Student.findOne({'facts._id': req.params.id}, function(err, student) {
//     student.facts.id(req.params.id).remove();
//     student.save(function(err) {
//     res.redirect('/students');
//   });
// });
// }
