/********************
 *  Coded By Davoleo
 ********************/

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

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