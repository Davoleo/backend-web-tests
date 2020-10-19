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