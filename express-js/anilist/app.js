/********************
 *  Coded By Davoleo
 ********************/

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//Object Data Mapper (ODM) -> Allows to turn JS object to MongoDB model and schemas
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/anitest', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));

//Schema
const aniSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
});

const Anime = mongoose.model("Anime", aniSchema);

// const angelsOfDeath = new Anime({
//     name: "Angels of Death",
//     image: new URL("https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99629-BXyAJ6PDq4sr.jpg"),
//     description: `13-year old Rachel awakens to find herself trapped in the basement of an abandoned building. Without any memories, or even a clue as to where she could be, she wanders the building, lost and dizzy. In her search, she comes across a man covered in bandages. He introduces himself as Zack and he wields a grim-reaper like sickle.
// A strange bond is struck between them, strengthened by strange, crazy promises…
// These two, trapped in this strange building, don't know why fate has placed them there. But they will work together desperately to find a way out…`
// });
//
// angelsOfDeath.save(function (error, anime) {
//     if (error) {
//         console.error("There was a problem with saving items to the database");
//     } else {
//         console.log(anime.name + " was saved to the database!");
//         console.log(anime);
//     }
// });

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("landing");
});

//INDEX - shows the anime list
app.get('/anilist', function (req, res) {
    //Get anime from db
    Anime.find({}, function (error, animes) {
        if (error) {
            console.log(error)
        } else {
            res.render('anilist', {list: animes})
        }
    })
});

//CREATE - add a new anime to database
app.post('/anilist', function (req, res) {
    const name = req.body.name;
    const imageUrl = req.body.image;
    const description = req.body.description;
    const anime = {name: name, image: imageUrl, description: description};

    Anime.create(anime,
        function (error, _) {
        if (error) {
            console.error(error);
        } else {
            res.redirect('/anilist');
        }
    });
});

//NEW - show the form to submit a new anime
app.get('/anilist/new', function (req, res) {
    res.render('new.ejs');
});

//SHOW - show detailed info about a specific anime
app.get('/anilist/:id', function (req, res) {
    Anime.findById(req.params.id, function (error, anime) {
        if (error) {
            console.error(error);
        } else {
            res.render('show', {anime: anime});
        }
    });
});

app.listen(3333, function () {
    console.log("The Server has been initialized");
});