var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
let about_data = require('./views/data/about.json')
app.get('/about', function(req, res) {
  res.render('pages/about', {about_data: about_data});
});

// solutions page
app.get('/solutions', function(req, res) {
    res.render('pages/solutions');
});

// contact page
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.listen(8080);
console.log('Server is listening on port 8080');