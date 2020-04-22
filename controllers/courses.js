const Course = require('../models/course');
const Location = require('../models/location');



const index = (req, res) => {
  console.log("current user:", req.user)
  Course.find({instructor: req.user._id}, (err, courses) => {
      res.render('courses/index', {
        title: 'All Courses', 
        courses 
      });
  });
}

const show = (req, res) => {
  console.log("show id");
  Course.findById(req.params.id, function(err, course) {
    res.render("courses/show", {
            title: 'Course Detail', 
            course, 
    })
  })
 
}

const newCourse = (req, res) => {
  Location.find({}, (err, locations) => {
    
    res.render('courses/new', {
      title: 'Add Course', 
      locations 
    });
});
    
}

const create = (req, res) => {
    console.log(req.body)
    console.log(req.user)
    req.body.instructor = req.user._id
  const course = new Course(req.body);
  course.save(function(err) {
    // one way to handle errors
    if (err) return res.render('/courses/new');
    res.redirect('/courses');
  });
}

function edit(req, res) {
  Course.findById(req.params.id, (err, course) => {
    console.log("Found Course:", course);
    res.render("./courses/edit", {
      title: "Edit Course",
      course: course,
    });
  });
}

function deleteItem(req, res) {
  Course.findByIdAndDelete(req.params.id, (err, course) => {
    console.log("Delete Course:", course);
    
    course.save(function (err) {
      res.redirect('/')
    })
  })
}


function update(req, res) {
  console.log("hit the update action we are expecting")
  Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, course) => {
      
      res.redirect(`show/${course._id}`);
    }
  );
}


module.exports = {
  index,
  show,
  new: newCourse,
  create,
  edit,
  delete: deleteItem,
  update
}