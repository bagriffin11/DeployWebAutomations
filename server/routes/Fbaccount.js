const express = require('express');
const router = express.Router();
const {Fbaccount} = require('../models');
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
    const fbaccount = req.body;
    await Fbaccount.create(fbaccount);
    res.json(fbaccount);
    // inserts body of variables into the table Posts
    // make async timing protocol 
    // res.json(post) sends data back if you insert it into insomnia
});




module.exports = router;