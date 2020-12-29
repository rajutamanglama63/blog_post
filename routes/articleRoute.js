const express = require("express");
const router = express.Router();

const Article = require("../models/article.js")


router.get("/", async(req, res) => {
    try {
        const Articles = await Article.find();
        res.status(200).json({Articles : Articles});
    } catch (error) {
        res.status(401).json({msg:error});
    }
})

router.post("/", async (req, res) => {
    const post = req.body;
    const newPost = new Article(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({msg:error});
    }
})

module.exports = router;