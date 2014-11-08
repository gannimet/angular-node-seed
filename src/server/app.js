var express = require('express');
var users = require('./routes/users');
var entries = require('./routes/entries');
var comments = require('./routes/comments');
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

app.get('/api/users', users.allUsers);

app.get('/api/entries', entries.allEntries);
app.get('/api/entry/:entryID', entries.entryByID);
app.get('/api/entry/:entryID/comments', comments.commentsByEntryID);

app.get('/partials/blog', partials.blog);
app.get('/partials/entry', partials.entry);

// Catch-all for non-matching URLs
// Enables refresh on client-side (URLs would
// otherwise be sent to the server)
app.use(function(req, res) {
	res.render('index');
});

app.listen(3000);
