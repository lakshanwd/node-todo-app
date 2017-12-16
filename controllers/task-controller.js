const bodyParser = require('body-parser');
const json = bodyParser.json();
const tasks = [{task:'Get Milk'},{task:'Drink Milk'},{task:'Play Games'}];

module.exports = function(app){

  //handle get requests
  app.get('/task', function(req, res){
    res.json(tasks);
  });

  //handle post requests
  app.post('/task', json, function(req, res){
    tasks.push(task);
    res.json({result : true});
  });

  //handle put requests
  app.put('/task', json, function(req, res){
    //todo: update task
    res.json({result : false});
  });

  //handle delete requests
  app.delete('/task', json, function(req, res){
    //todo: delete task
    res.json({result : false});
  });
}
