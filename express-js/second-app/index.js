/********************
 *  Coded By Davoleo
 ********************/

let express = require("express");
let app = express();

app.get("/", function (req, res) {
    res.render("home.ejs");
    //res.send("<h1>Welcome to the second-app!</h1>")
});

app.get("/looking_at/:thing", function (req, res) {
    let thing = req.params.thing;
    res.render("look.ejs", {thing: thing});
});

app.listen(3333, function () {
    console.log("App initialized on port 3333")
});