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

//Adding functionality methods to model instances
aniSchema.methods.logName = function () {
    //Logs the name of the anime
    console.log(this.name);
}

//Example Static Model Functionality
aniSchema.statics.logAll = function () {
    //Log all anime objects
    return console.log(this.find());
}

//Virtuals: Properties that don't exist in the database, but that we can use in the model
aniSchema.virtual('nameDesc').get(function () {
    return `${this.name} - ${this.description}`
});

//Middleware: do custom things before after some events
//To maintain the middleware chain we:
//  Either we accept next as parameter and call it as a function at the end of our middleware,
//  or we make sure to return a promise at the end of the middleware function
aniSchema.pre('save', async function () {
    console.log("about to save!!")
});
aniSchema.post('save', async function () {
    console.log("just saved!!")
});

//Model
const Anime = mongoose.model("Anime", aniSchema);

module.exports = Anime;