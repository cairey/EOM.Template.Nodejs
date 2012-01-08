
/*
 * GET home page.
 */

exports.index = function(app){
    
    app.get('/articles/new', function(req, res){
        res.render('index', { title: 'Express' });
    });  
};