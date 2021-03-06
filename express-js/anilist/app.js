/********************
 *  Coded By Davoleo
 ********************/

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//Object Data Mapper (ODM) -> Allows to turn JS object to MongoDB model and schemas
const mongoose = require('mongoose');
const Anime = require('./models/anime');
const Comment = require('./models/comment');
const seedDB = require('./seeds')

mongoose.connect('mongodb://localhost:27017/anitest', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));

//seedDB().catch(reason => console.log(reason));

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

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
            res.render('anime/index', {list: animes})
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
    res.render('anime/new.ejs');
});

//SHOW - show detailed info about a specific anime
app.get('/anilist/:id', function (req, res) {
    Anime.findById(req.params.id).populate("comments").exec(function (error, anime) {
        if (error) {
            console.error(error);
        } else {
            console.log(anime)
            res.render('anime/show', {anime: anime});
        }
    });
});

//----- Comments routes -----
app.get('/anilist/:id/comments/new', function (req, res) {
    Anime.findById(req.params.id, function (error, anime) {
        if (error) {
            console.log(error);
        }
        else {
            res.render("comment/new", {anime: anime});
        }
    });
});

app.post('/anilist/:id/comments', function (req, res) {
    Anime.findById(req.params.id, function (error, anime) {
        if (error) {
            console.log(error);
            res.redirect("/anilist")
        }
        else {
            Comment.create(req.body.comment, function (error, comment) {
                if (error) {
                    console.log(error);
                }
                else {
                    anime.comments.push(comment);
                    anime.save();
                    res.redirect("/anilist/" + anime._id);
                }
            });
        }
    });
});

app.listen(3333, function () {
    console.log("The Server has been initialized");
});