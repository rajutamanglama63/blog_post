const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    article: {
        type: String
    }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;