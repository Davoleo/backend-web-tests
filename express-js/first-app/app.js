/********************
 *  Coded By Davoleo
 ********************/

let express = require("express");
let app = express();
let animalSounds = {
    cricket: "chirps",
    bat: "screeches",
    cobra: "hisses",
    rat: "squeaks",
    cat: "meows",
    dog: "woofs",
};

//The order of routes matters
//Every page can only have one route therefore if you put the * route as first it will override all the other more specific routes
// "/" => "Hello World!"
app.get("/", function (req, res) {
    res.send("Hello World!")
});
// "/bye" => "Goodbye!"
app.get("/bye", function (req, res) {
    res.send("Goodbye!")
});
// "/weeb" => "Ara Ara, User-kun"
app.get("/weeb", function (req, res) {
    res.send("Ara Ara, User-kun");
    res.send("Welcome to the WEEB area");
});

//parameterized routes
app.get("/anime/:title", function (req, res) {
    let animeTitle = req.params.title;
    res.send("<h1>" + animeTitle.toUpperCase() + "</h1>");
});

//practice
app.get("/assignment", function (req, res) {
    res.send(`
<h1>Welcome to My Assignment</h1>
<ul>
    <li>Visit "/animal/:animal"</li>
    <li>Visit "/repeat/:word/:count"</li>        
</ul>
    `);
});

app.get("/assignment/animals/:name", function (req, res) {
    let animal = req.params.name.toLowerCase();
    res.send("The " + animal + " " + animalSounds[animal]);
});

app.get("/assignment/repeat/:word/:count", function (req, res) {
    let word = req.params.word + " ";
    let count = req.params.count;
    let string = "";
    for (let i = 0; i < count; i++) {
        string += word;
    }

    res.send(string);
});

app.get("/assignment/*", function (req, res) {
    res.send("Sorry :( - Page not found... What are you doing with your life?")
});

//Gets called for any page that wasn't specified before
app.get("*", function(req, res) {
    res.send('<img src="https://http.cat/404.html" alt="404 : Route Not Found">')
});

app.listen(1111, () => console.log("Express App is being hosted on port 1111"));
