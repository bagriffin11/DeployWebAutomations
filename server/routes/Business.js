const express = require('express');
const router = express.Router();
const {Business} = require('../models');

//can write post and get requests 
router.get("/:userId", async (req, res) =>{
   const userId = req.params.userId;
   const business = await Business.findAll({where: {UserId: userId} });
   res.json(business);
});
//instead of send you can put json and it returns a string



router.post("/", async (req, res) => {
    const business = req.body;
    await Business.create(business);
    res.json(business);
    // inserts body of variables into the table Posts
    // make async timing protocol 
    // res.json(post) sends data back if you insert it into insomnia
});




module.exports = router;