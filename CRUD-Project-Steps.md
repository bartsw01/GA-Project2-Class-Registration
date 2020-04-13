# GA-Project2-Class-Registration
# _Class Registration CRUD Application_
# _Getting Started:_


[Click on Link to open CRUD markdown file](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w05/d5/guide-to-user-centric-crud.md)

[Click on Link for Project 2 reqs](https://git.generalassemb.ly/SEI-CC/SEI-CC-7/blob/master/projects/project-2/project-2-requirements.md)

# _Step 1......Setup Initial files
    1. express -e <file-folder>
    2. npm install
    3. npm install mongoose
    4. npm install method-override
    5. create config/database.js
    6. change app.js to server.js and change in bin/www  var app = require('../app');   var app = require('../server'); 

    7. 


# _Step 2......Setup MongoDB Cloud Atlas 
[Click on Link to open MongoDB Cloud Atlas](https://www.mongodb.com/cloud/atlas)
    1. put link to database into .env file DATABASE_URL= 



# _Step 3......Setup Google OAuth (11 Steps)
    1. setup GOOGLE_CLIENT_ID, GOOGLE_SECRET, GOOGLE_CALLBACK
    2. install Session Middleware - npm install express-session
    3. install Passport.js

[Click on Link to open Google OAuth markdown file](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w05/d4/01-02-oauth-authentication/oauth-lesson.md)

[Click on Link for Google OAuth completed code](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w05/d4/01-02-oauth-authentication/completed-code/sei-students/routes/students.js)


# _Step 4......Check Dependencies in package.json

"dependencies": {
    "cookie-parser": "^1.4.4",
    "debug": "~2.6.9",
    "dotenv": "^6.2.0",
    "ejs": "~2.5.7",
    "express": "~4.16.0",
    "express-session": "^1.17.0",
    "http-errors": "~1.6.2",
    "method-override": "^3.0.0",
    "mongoose": "^5.9.2",
    "morgan": "~1.9.0",
    "passport": "^0.4.1",
    "passport-google-oauth": "^2.0.0"
  }
