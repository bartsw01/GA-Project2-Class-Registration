# GA-Project2-Class-Registration
# _Class Registration CRUD Application_
# _Getting Started:_

[Click on Link to Run from Heroku](https://shrouded-savannah-16879.herokuapp.com/)



[Click on Link to view GitHub Repo](https://github.com/bartsw01/GA-Project2-Class-Registration)

[Click on Link to Open Trello Board](https://trello.com/b/O0LYInMg/ga-registration-project2`)

# _Screenshot(s):

![Game Screenshot](https://github.com/bartsw01/GA-Project2-Class-Registration/blob/master/images/GA-Project2-ERD.png)

#### _Class Registration Application, April 17, 2020_

#### By _**A Weary Wannabee Coder**_

## Description

_CRUD Application for registering students for a class._

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

## Specification

| HTTP Method   | URL Endpoint | Controller Action |  Purpose  |
| ------------- | ------------- | ------------- | -------------------- |
| GET | /courses | coursesCtrl.index | View all courses that user signed up for |
| GET | /courses/all | coursesCtrl.allCourses |  View all courses |
| GET |/courses/:id | coursesCtrl.show |   View Details of a course |
| GET | /courses/new| coursesCtrl.new| View a form for create an online course |
| POST | /courses  | coursesCtrl.create| Handle the new online course being submitted |
| GET | /courses/:id/edit  | coursesCtrl.edit| Edit online course details (restrict to admin) |
| PUT | /courses  | coursesCtrl.edit| Make changes to course |
| DELETE| /courses  | coursesCtrl.delete| Delete a course|



## Known Bugs

_OAuth needs troubleshooting._
_DETAILS link stopped working._
_EDIT, UPDATE, and DELETE functions are in the DETAIL page._
_STUDENT List not implemented._

## Support and contact details

_If you have any questions or suggestions. Please free to contact us._

## Technologies Used

_HTML_
_CSS_
_Express_
_JavaScripts_
_GitHub_
_Mongoose_
_MongoDB_
_Passport_

## Planned future enhancements 

_Students could log in and choose a class to signup for_
_Email confirmation sent back to student_
_Display list of students in each class_


### License

*Determine the license under which this application can be used.  See below for more details on licensing.*

Copyright (c) 2020 **_Bart Webber and Associates_**