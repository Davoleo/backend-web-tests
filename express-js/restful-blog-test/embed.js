/********************
 *  Coded By Davoleo
 ********************/

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restful_blog');

//Post Model: title | content
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
});
const Post = mongoose.model("Post", postSchema);

//User Model: e-mail | name
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema] //An array of posts
});
const User = mongoose.model("User", userSchema);

//create a new user
// const newUser = new User({
//     email: "theloss@bigmail.meme",
//     name: "The Loss Meme"
// });
//
// newUser.posts.push({
//     title: "Wondering how useless I am",
//     content: "The answer is that I'm a completely useless meme that can't even be understood since it's literally got no meaning"
// });
//
// newUser.save(function (error, user) {
//     if (error)
//         console.log(error);
//     else
//         console.log(user);
// });

// //create a new post
// const newPost = new Post({
//     title: "E light reflection",
//     content: "IT FUCKING SHINES, LIKE A FUCKING DIAMOND"
// });
// newPost.save(function (error, post) {
//     if (error)
//         console.log(error);
//     else
//         console.log(post);
// });

User.findOne({name: "The Loss Meme"}, function (error, user) {
    if (error)
        console.log(error);
    else {
        user.posts.push({
            title: "Fucking end my existence please!",
            content: "I'm a meme with no meaning that is not even funny, my mere existence doesn't make sense, I could as well be removed completely"
        });
        user.save(function (error, user) {
            if (error)
                console.log(error)
            else
                console.log(user)
        });
    }
});