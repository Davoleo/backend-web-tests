/********************
 *  Coded By Davoleo
 ********************/

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const expressSanitizer = require('express-sanitizer');

//Express configuration
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

//Mongoose Connection
mongoose.connect('mongodb://localhost:27017/restful_blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));

//Mongoose Model Config
/*
* Blog Model:
* title
* image
* body
* created (date)
*/
const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now() }
});

const Blog = mongoose.model("Blog", blogSchema);

//restful Routes
app.get('/', function (req, res) {
    res.redirect('/blogs');
});

//INDEX ROUTE
app.get('/blogs', function (req, res) {
    Blog.find({}, function (error, blogs) {
        if (error) {
            console.log(error);
        } else {
            res.render('index', {blogs: blogs});
        }
    });
});

//NEW ROUTE
app.get('/blogs/new', function (req, res) {
    res.render('new');
});

//CREATE ROUTE
app.post('/blogs', function (req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function (error, newBlog) {
        if (error) {
            res.render('new');
        } else {
            res.redirect('/blogs');
        }
    });
});

//SHOW ROUTE
app.get('/blogs/:id', function (req, res) {
    Blog.findById(req.params.id, function (error, blog) {
        if (error) {
            console.warn('Show Route Error', error);
            res.redirect('/blogs');
        }
        else {
            res.render('show', {blog: blog});
        }
    });
});

//EDIT ROUTE
app.get('/blogs/:id/edit', function (req, res) {
    Blog.findById(req.params.id, function (error, blog) {
       if (error) {
           res.redirect('/blogs')
       }
       else {
           res.render('edit', {blog: blog})
       }
    });
});

//UPDATE ROUTE
app.put('/blogs/:id', function (req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, null,function (error, updatedBlog) {
        if (error) {
            console.log('CATCHI')
            res.redirect('/blogs');
        }
        else {
            res.redirect('/blogs/' + req.params.id);
        }
    })
});

//DESTROY ROUTE
app.delete('/blogs/:id', function (req, res) {
   Blog.findByIdAndRemove(req.params.id, null, function (error) {
      if (error) {
          res.redirect('/blogs')
      }
      else {
          res.redirect('/blogs');
      }
   });
});

app.listen(3333, function () {
    console.log("RESTful blog is now running!")
});