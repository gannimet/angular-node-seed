var express = require('express');
var users = require('./routes/users');
var partials = require('./routes/partials');

var app = express();

// Where to find views and how to render them
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// Log requests
//app.use(express.logger('dev'));
// Where to find static files, mimicking file system
app.use(express.static(__dirname + '/../../static'));

// Homepage
app.get('/', function(req, res) {
	res.render('index');
});

app.get('/users', users.list);
app.get('/partials/blog', partials.blog);
app.get('/partials/entry', partials.entry);

app.listen(3000);
