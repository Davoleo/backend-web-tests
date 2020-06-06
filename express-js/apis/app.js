/********************
 *  Coded By Davoleo
 ********************/

//Endpoint Tests
//http://www.omdbapi.com/?apikey=thewdb&s=guardians+of+the+galaxy
//http://www.omdbapi.com/?apikey=thewdb&i=tt3896198&

const express = require('express');
const app = express();
const request = require('request');

app.set("view engine", "ejs");

app.get('/', function (req, res) {
    res.render("home");
})

app.get('/results', function (req, res) {
    //Get the form information from the query string
    const term = req.query.search;

    request('http://www.omdbapi.com/?apikey=thewdb&s=' + term, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            const data = JSON.parse(body);
            res.render('results', {data: data});
        }
    })
});

app.listen(3333, function () {
    console.log("Movie API Test initialized on port 3333")
});