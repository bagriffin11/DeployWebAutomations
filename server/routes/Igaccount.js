const express = require('express');
const router = express.Router();
const {Igaccount} = require('../models');
/*
//can write post and get requests 
router.get("/:postId", async (req, res) =>{
   const postId = req.params.postId;
   const igaccount = await Posts.findAll({ PostId: postId});
   res.json(igaccount);
});
//instead of send you can put json and it returns a string
*/


router.post("/", async (req, res) => {
    const igaccount = req.body;
    await Igaccount.create(igaccount);
    res.json(igaccount);
    // inserts body of variables into the table Posts
    // make async timing protocol 
    // res.json(post) sends data back if you insert it into insomnia
});




module.exports = router;