/********************
 *  Coded By Davoleo
 ********************/

const mongoose = require('mongoose');

//User Model: e-mail | name
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post2"
    }] //An array of objects of type ObjectId that reference a Post2 Object
});

module.exports = mongoose.model("User2", userSchema);