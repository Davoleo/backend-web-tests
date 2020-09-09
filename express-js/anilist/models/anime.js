/********************
 *  Coded By Davoleo
 ********************/

const mongoose = require('mongoose');

//Schema
const aniSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

//Model
const Anime = mongoose.model("Anime", aniSchema);

module.exports = Anime;