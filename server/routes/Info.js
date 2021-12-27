const express = require('express');
const router = express.Router();
const {Info} = require('../models');


router.get("/byUserId/:UserId", async (req,res) => {
    const userid = req.params.UserId;
    const user = await User.findByPk(userid);
    res.json(user);
}); 

//can write post and get requests 
router.get("/:userId", async (req, res) =>{
   const userId = req.params.userId;
   const info = await Info.findAll({where: {UserId: userId} });
   res.json(info);
});
//instead of send you can put json and it returns a string



router.post("/", async (req, res) => {
    const info = req.body;
    await Info.create(info);
    res.json(info);
    // inserts body of variables into the table Posts
    // make async timing protocol 
    // res.json(post) sends data back if you insert it into insomnia
});




module.exports = router;