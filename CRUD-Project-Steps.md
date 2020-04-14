# GA-Project2-Class-Registration
# _Class Registration CRUD Application_
# _Getting Started:_


[Click on Link to open CRUD markdown file](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w05/d5/guide-to-user-centric-crud.md)

[Click on Link for Project 2 reqs](https://git.generalassemb.ly/SEI-CC/SEI-CC-7/blob/master/projects/project-2/project-2-requirements.md)

# _Step 1......Setup Initial files
    1. express -e <file-folder>
    2. npm install, npm install dotenv   require('dotenv').config(); in server.js
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

  
What order should I do things in? This is Taylor's back-to-front method designed to foster understanding and keep things feeling more organized and palpable/less chaotic. There are so many things to track and many moving parts! This is how I've seen folks be the most successful and avoid overwhelm:
Get your Oauth set up and verify that it is fully working
Code out your schemas inside your models folder (this should exactly match your ERD)
Add the middleware for your routes into your server.js, then write your routes. Remember, a route looks like router.get(<path>, <action>), instead of setting up your controllers and immediately using those to fill in the action, just fill it in with a dummy method like so:
router.get('/about', () => {res.send('this is the about page!')})
4. Once you know your routes are working because you've tested them in the browser, now you can set up your controllers to slowly replace your actions. Again, in your controller actions, start with a res.send() just to make sure you're hitting the controller:
const index()=>{
      res.send('ayyy my home route hit my index controller, cool!!')
}
5. Now that you know your controllers are hooked up appropriately to your routes and everything is showing up as planned in your browser when you navigate to each path (i.e. you're getting the text you put in your res.send() actions), add the database queries to your controllers and send the data through to make sure you're getting the data you want (you can use insomnia to try out your post/put routes):
const index()=>{
      Books.find().then((err, books)=>{
         res.send('ayyy my home route hit my index controller, cool!!')
      })
}
6. Test all of this so you know you are getting the data you want from your database queries. **now** start writing out your views and sending the data you need access to in your ejs through your controller actions. So, you would replace the above action with something like this:
const index()=>{
      Books.find().then((err, books)=>{
         res.render('index', {books})
      })
}
7. Now you know your backend is all set up, and most of the errors you hit should be just with regards to your ejs. (edited) 