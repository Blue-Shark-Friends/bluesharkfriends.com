var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

// use res.render to load up an ejs view file

let branding_data = require('./views/data/_branding.json')

// index page
let index_data = require('./views/data/index.json')
app.get('/', function(req, res) {
  res.render('pages/index', {index_data: index_data, branding_data: branding_data});
});

// about page
let about_data = require('./views/data/about.json')
app.get('/about', function(req, res) {
  res.render('pages/about', {about_data: about_data, branding_data: branding_data});
});

// manifesto page
let manifesto_data = require('./views/data/manifesto.json')
app.get('/manifesto', function(req, res) {
  res.render('pages/manifesto', {manifesto_data: manifesto_data, branding_data: branding_data});
});

// solutions page
let solutions_data = require('./views/data/solutions.json')
app.get('/solutions', function(req, res) {
    res.render('pages/solutions', {solutions_data: solutions_data, branding_data: branding_data});
});

// needs page
let needs_data = require('./views/data/needs.json')
app.get('/needs', function(req, res) {
    res.render('pages/needs', {needs_data: needs_data, branding_data: branding_data});
});

// contact page
let contact_data = require('./views/data/contact.json')
app.get('/contact', function(req, res) {
    res.render('pages/contact', {contact_data: contact_data, branding_data: branding_data});
});

// story page
let story_data = require('./views/data/story.json')
app.get('/story', function(req, res) {
    res.render('pages/story', {story_data: story_data, branding_data: branding_data});
});

// palestine page
let palestine_data = require('./views/data/palestine.json')
app.get('/palestine', function(req, res) {
    res.render('pages/palestine', {palestine_data: palestine_data, branding_data: branding_data});
});

// contracts congratulations page
let contractCongrats_data = require('./views/data/contracts_congratulations.json')
app.get('/contracts/congratulations', function(req, res) {
	res.render('pages/contracts_congratulations', {contractCongrats_data: contractCongrats_data, branding_data: branding_data});
});
app.get("/contracts/step1" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/7JXH_loVCGI8Iqe0nd6GA");
});
app.get("/contracts/step2" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/maWFi-0zb300zg73FYmtq");
});
app.get("/contracts/step3" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/Ux-TF-RCVG4Tbwf_yp8yd");
});
app.get("/contracts/step4" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/_Fgy3p1TPqluMmLYMUsfv");
});
app.get("/contracts/step5" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/OPgdLRx7TgI842-a-wasR");
});
app.get("/contracts/step6" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/9UhTYdeF_XZESLqNzKuIs");
});

app.listen(8080);
console.log('Server is listening on port 8080');