const express = require('express');
const router = express.Router();
const {Info} = require('../models');
const {createTokens, validateToken} = require("../jwt/Jwt")



router.get("/byId/:id", async (req,res) => {
    const id = req.params.id;
    const user = await Info.findByPk(id);
    res.json(user);
}); 

//can write post and get requests 
router.get("/byUserId/:id", async (req, res) =>{
    const id = req.params.id;

   const useri = await Info.findAll({where: {UserId: id } });
   res.json(useri);
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