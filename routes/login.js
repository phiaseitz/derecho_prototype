var passport = require('passport');
// var request = require('request');
var path = require("path");

var LocalStrategy = require('passport-local').Strategy;
// var GoogleStrategy = require('passport-google-oauth2').Strategy;
var User = require('../models/users');

var auth = {};

auth.configure = function() {

	passport.serializeUser(function(user, done) {
	  done(null, user);
	});

	passport.deserializeUser(function(obj, done) {
	  done(null, obj);
	});

	// Registers a new user using a local strategy
	passport.use('local-signup', new LocalStrategy(
	    function(username, password, done) {
	        process.nextTick(function() {
	        User.findOne({ 'username' :  username }, function(err, user) {
	            if (err) return done(err);
	            // Checks for users with a conflicting username
	            if (user) return done(null, false);
	            else {
	            	// Creates a username and a hashed password
	                var user = new User();
	                user.username = username;
	                user.password = user.generateHash(password);
	                user.save(function(err) {
	                    if (err) throw err;
	                    return done(null, user);
	                });
	            }
	        });    
	        });
	    }));

	// Native login using a local strategy
	passport.use('local-login', new LocalStrategy(
	  function(username, password, done) {
	      User.findOne({username: username}, function (err, user) {
	        if (err) return done(err);
	        // Checks if the user exists
	        if (!user) return done(null, false);
	        // Checks if the password is valid
	        if(!user.validPassword(password)) return done(null, false);
	        else return done(null, user);
	      });
	  }
	));



}

auth.localLogin = function () {
	return passport.authenticate('local-login', {
	    successRedirect: '/',
	    failureRedirect: '/login.html'
	});
}

auth.localSignup = function () {
	return passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/login.html'
	});
}


auth.logout = function(req, res) {
    req.logout();
    res.redirect('/login.html');
}


auth.home = function(req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
}


module.exports = auth;