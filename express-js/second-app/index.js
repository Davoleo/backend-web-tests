/********************
 *  Coded By Davoleo
 ********************/

let express = require("express");
let app = express();

//Serves the content of the 'public' directory with the rest of the app
app.use(express.static("public"));
//Sets EJS as the default template language for the app
app.set("view engine", "ejs");

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



app.listen(3333, function () {
    console.log("App initialized on port 3333")
});