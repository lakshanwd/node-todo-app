const express = require('express');
const todoController = require('./controllers/todo-controller');
const taskController = require('./controllers/task-controller');

var app = express();

//setup template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./assets'));

//fire controllers
todoController(app);
taskController(app);

//listen
app.listen(3000);
console.log('listening to port 3000');
