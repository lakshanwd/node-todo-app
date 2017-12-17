const bodyParser = require('body-parser');
const db = require('../db/database');
const json = bodyParser.json();

module.exports = function(app){

  //handle get requests
  app.get('/task', function(req, res){
    db.ToDo.find({}, function(err, data){
      if(err) throw err;
      res.json(data);
    });
  });

  //handle post requests
  app.post('/task', json, function(req, res){
    var tobeSaved = req.body;
    db.ToDo(tobeSaved).save().then(function(doc){
      res.json({ status : tobeSaved.task == doc.task });
    });
  });

  //handle delete requests
  app.delete('/task', json, function(req, res){
    var tobeDeleted = req.body;
    db.ToDo.remove(tobeDeleted, function(err, data){
      if(err) throw err;
      res.json(data);
    });
  });
}
