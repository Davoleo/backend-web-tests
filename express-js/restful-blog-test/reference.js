/********************
 *  Coded By Davoleo
 ********************/

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/restful_blog');

const Post = require("./models/post");
const User = require('./models/user');

// User2.create({
//     email: "astronauts@bigsurprise.meme",
//     name: "The astronauts that find a big surprise"
// });

Post.create({
    title: "Why are astronauts ruining the memes? part 4",
    content: "dasjdhadasjkdhajksdhajksdhajksdhajsjkhasjdhasjdhdhsajdhsjkdhasjhkjashd"
}, function (error, post) {
    User.findOne({
        email: "astronauts@bigsurprise.meme",
    }, function (error, user) {
        if (error)
            console.log(error);
        else {
            user.posts.push(post);
            user.save(function (error, updatedUser) {
                if (error)
                    console.log(error);
                else
                    console.log(updatedUser);
            });
        }
    });
});

//Find a user and print it populating the posts array ids with actual post objects
// User.findOne({email: "astronauts@bigsurprise.meme"}).populate("posts").exec(function (error, user) {
//     if (error)
//         console.log(error);
//     else
//         console.log(user);
// });

