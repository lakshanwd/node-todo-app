module.exports = function(app) {

    //handle get requests
    app.get('/todo', function(req, res) {
        res.render('todo');
    });

}
