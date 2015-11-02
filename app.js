var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var exphbs  = require("express-handlebars");
var mongoose = require('mongoose');

var mongoURI = process.env.MONGOURI || "mongodb://127.0.0.1:27017/test";
mongoose.connect(mongoURI);

var home  = require("./routes/home")();
var strategy = require("./auth")(mongoose, passport);

var app = express();

var PORT = process.env.PORT || 3001

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", home.getHome);
app.get("/login", login.getLogin);

app.post('/login',
         passport.authenticate('local', { failureRedirect: '/login' }),
         function(req, res) {
           res.redirect('/');
         });

app.listen(PORT, function() {
  console.log("App running on port:", PORT);
});
