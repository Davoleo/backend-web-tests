/********************
 *  Coded By Davoleo
 ********************/

const mongoose = require('mongoose');

//Post Model: title | content
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

module.exports = mongoose.model("Post2", postSchema);