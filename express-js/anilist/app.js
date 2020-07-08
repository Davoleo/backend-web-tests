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

const aniSchema = new mongoose.Schema({
    name: String,
    image: URL
});

const Anime = mongoose.model("Anime", aniSchema);

//Make a new Anime and save it to the database instantly
Anime.create({
    name: "Angels of Death",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99629-BXyAJ6PDq4sr.jpg"
}, function (error, anime) {
    if (error) {
        console.error(error);
    } else {
        console.log(anime);
    }
});

Anime.find({}, function (err, animes) {
    if (err) {
        console.error("Error retrieving anime list: ");
        console.log(err);
    } else {
        console.log("Anime List: ");
        console.log(animes);
    }
});

const list = [
    {
        name: "Angels of Death",
        image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99629-BXyAJ6PDq4sr.jpg"
    },
    {
        name: "Dog Days",
        image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10155-e5d9PukNkE8D.jpg"
    },
    {
        name: "Fruits Basket Season 2",
        image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111762-VsqqGAy7bdE1.jpg"
    }
]

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("landing");
});

app.get('/anilist', function (req, res) {
    res.render('anilist', {list: list})
});

app.post('/anilist', function (req, res) {
    const name = req.body.name;
    const imageUrl = req.body.image;
    list.push({
        name: name,
        image: imageUrl
    })
    res.redirect('/anilist');
});

app.get('/anilist/new', function (req, res) {
    res.render('new.ejs')
})

app.listen(3333, function () {
    console.log("The Server has been initialized");
});