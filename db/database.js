const mongoose = require('mongoose');

//connect to databse
mongoose.connect('mongodb://user:password@ds141796.mlab.com:41796/todo-db', {
    useMongoClient: true
});

//create a schema
var todoSchema = new mongoose.Schema({
    task: String
});

module.exports.ToDo = mongoose.model('Todo', todoSchema);
