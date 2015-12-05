// NPM Modules

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var exphbs  = require("express-handlebars");

var home = require('./routes/home')();
var auth = require('./routes/login');

// Mongoose, Express, Passport

var app = express();
var mongoURI = process.env.MONGOURI || "mongodb://localhost/test";
mongoose.connect(mongoURI);
var PORT = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
auth.configure();

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Middleware

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret',
  resave: false,
  saveUnitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


// -- Public Routes
app.post('/login', auth.localLogin());
app.post('/user', auth.localSignup());


// -- Authentication Middleware
app.use(function (req, res, next) {
    if (req.isAuthenticated()) next();
    else res.redirect('/login.html');
});


// -- Private Routes
// ROUTING
app.get('/', home.getHome);
app.get('/logout', auth.logout);

// -- Listen
app.listen(PORT);