const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});

const articleSchema = {
    title: String,
    content: String
}

const Article = mongoose.model("Article", articleSchema);

app.route("/articles")
    .get((req, res) => {
        Article.find((err, foundArticles) => {
            if (!err) {
                res.send(foundArticles);
            } else {
                res.send(err);
            }
    
        });
    })
    .post((req, res) => {

        const newArticle = new Article ({
            name: req.body.title,
            content: req.body.content
        });
    
        newArticle.save((err) => {
            if(!err) {
                res.send("Successfully added a new article!");
            } else {
                res.send(err);
            }
        });
    })
    .delete((req, res) => {
        Article.deleteMany((err) => {
            if(!err) {
                res.send("Successfully Deleted!");
            } else {
                res.send(err);
            }
        });
    });

app.route("/articles/:articleTitle")
    .get((req, res) => {
        Article.findOne({ title: req.params.articleTitle }, (err, foundArticle) => {
            if (foundArticle) {
                res.send(foundArticle);
            } else {
                res.send("No articles found");
            }
        });
    })
    .put((req, res) => {
        Article.update(
            {title: req.params.articleTitle},
            {title: req.body.title, content: req.body.content},
            {overwrite: true},
            (err) => {
                if(!err) {
                    res.send("Successfully updated");
                }
            }
        );
    })
    .patch((req, res) => {
        Article.update(
            {title: req.params.articleTitle},
            { $set: req.body},
            (err) => {
                if(!err) {
                    res.send("Successfully Updated the files!");
                } else {
                    console.log(err);
                }
            }
        );
    })
    .delete((req, res) => {
        Article.deleteOne(
            {title: req.params.articleTitle },
            (err) => {
                if(!err) {
                    res.send("Successfully deleted the Files!");
                } else {
                    console.log(err);
                }
            }
        )
    });

app.listen(3000, () => {
    console.log("Server started on port 3000");
});