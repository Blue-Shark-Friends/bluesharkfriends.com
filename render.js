var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

const fs = require('fs');

// use res.render to load up an ejs view file

let branding_data = require('./views/data/_branding.json')

// index page
let index_data = require('./views/data/index.json')
app.render('pages/index', {index_data: index_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/index.html')
        fs.writeFile(__dirname + '/index.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

// about page
let about_data = require('./views/data/about.json')
app.render('pages/about', {about_data: about_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/about.html')
        fs.writeFile(__dirname + '/about.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

// manifesto page
let manifesto_data = require('./views/data/manifesto.json')
app.render('pages/manifesto', {manifesto_data: manifesto_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/manifesto.html')
        fs.writeFile(__dirname + '/manifesto.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

// solutions page
let solutions_data = require('./views/data/solutions.json')
app.render('pages/solutions', {solutions_data: solutions_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/solutions.html')
        fs.writeFile(__dirname + '/solutions.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

// contact page
let contact_data = require('./views/data/contact.json')
app.render('pages/contact', {contact_data: contact_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/contact.html')
        fs.writeFile(__dirname + '/contact.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

console.log('Static files generated.');