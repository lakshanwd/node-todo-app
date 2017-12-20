const express = require('express');
const homeController = require('./controllers/home-controller');
const taskController = require('./controllers/task-controller');

var app = express();

//setup template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./assets'));

//fire controllers
homeController(app);
taskController(app);

//listen
app.listen(3000);
console.log('listening to port 3000');