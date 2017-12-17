module.exports = function(app) {

    //handle get requests
    app.get('/', function(req, res) {
        res.render('todo');
    });

}
