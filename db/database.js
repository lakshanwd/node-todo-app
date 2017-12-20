const mongoose = require('mongoose');

//connect to databse
mongoose.connect('mongodb://localhost/myapp', {
  useMongoClient: true
});

//create a schema
var todoSchema = new mongoose.Schema({
  task: String
});

module.exports.ToDo = mongoose.model('Todo', todoSchema);