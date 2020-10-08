/********************
 *  Coded By Davoleo
 ********************/

const express = require("express");
const app = express();

//Allows to parse the body of form responses (for example)
const bodyParser = require("body-parser");

//Serves the content of the 'public' directory with the rest of the app
app.use(express.static("public"));
//Sets EJS as the default template language for the app
app.set("view engine", "ejs");
//Install the post request body parser into Express
app.use(bodyParser.urlencoded({extended: true}));

//Rendering a plain HTML/EJS file
app.get("/", function (req, res) {
    res.render("home");
    //res.send("<h1>Welcome to the second-app!</h1>")
});

//Rendering an EJS file passing parameters + if statements inside EJS files
app.get("/looking_at/:thing", function (req, res) {
    let thing = req.params.thing;
    res.render("look.ejs", {thing: thing});
});

//Rendering an EJS file passing parameters + for loops inside EJS files
app.get("/posts", function (req, res) {
    let posts = [
        {title: "Post1", author: "Davoleo"},
        {title: "Post2", author: "uwuBoi"},
        {title: "Post3", author: "Matpac"}
    ];

    res.render("posts.ejs", {posts: posts})
});

//Waifu list
let waifus = [
    "Ryuko Matoi",
    "Meia Gisborn",
    "Rem",
    "Yuki Nagato",
    "Hifumi Takimoto"
];

app.get("/waifus", function (req, res) {
    res.render("waifus", {waifus: waifus});
});

//Example of a POST route
app.post("/addwaifu", function (req, res) {
    //To parse the body of a request as a js object you need to first install a custom package called body-parser
    let newWaifu = req.body.name;
    waifus.push(newWaifu);
    res.redirect("/waifus");
});

//----------------------- Authentication Section ------------------------
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const User = require("./models/user");
mongoose.connect("mongodb://localhost/auth_demo_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(require("express-session")({
    secret: "Ryuko is best waifu",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//--- Routes ---

app.get("/auth", function (req, res) {
    res.render("auth/home");
});

app.get("/auth/secret", isLoggedIn, function (req, res) {
    res.render("auth/secret");
});

//Auth Routes
//Shows the signup form
app.get("/auth/register", function (req, res) {
   res.render("auth/register");
});

//Handles user registration
app.post("/auth/register", function (req, res) {
    //Creates a new user object encoding the password
    User.register(new User({
        username: req.body.username
    }), req.body.password, function (error, user) {
        if (error) {
            console.log(error);
            return res.render('auth/register');
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/auth/secret");
        });
    });
});

app.get('/auth/login', function (req, res) {
    res.render("auth/login");
});

//passport middleware that runs before the final callback
app.post("/auth/login", passport.authenticate('local', {
    successRedirect: "/auth/secret",
    failureRedirect: "/auth/login"
}), function (req, res) {});

app.get("/auth/logout", function (req, res) {
    req.logout();
    console.log("OK, BOOMER");
    res.redirect("/auth")
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect("/auth/login");
}

app.listen(3333, function () {
    console.log("App initialized on port 3333")
});