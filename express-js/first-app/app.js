/********************
 *  Coded By Davoleo
 ********************/

let express = require("express");
let app = express();

//3 Routes
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
    res.send("Ara Ara, User-kun")
});

app.listen(1111, () => console.log("Express App is being hosted on port 1111"));
