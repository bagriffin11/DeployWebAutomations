const express = require('express');
const router = express.Router();
const {Business} = require('../models');

//can write post and get requests 
router.get("/getUserId/:id", async (req, res) =>{
   const id = req.params.id;
   const business = await Business.findAll({where: {UserId: id} });
   res.json(business);
});
//instead of send you can put json and it returns a string
router.delete("/delete/:id", async (req,res) => {
    const bus = req.params.id
    await Business.destroy({where: {id: bus}});
    res.json("Deleted business");
})


router.post("/", async (req, res) => {
    const business = req.body;
    await Business.create(business);
    res.json(business);
    // inserts body of variables into the table Posts
    // make async timing protocol 
    // res.json(post) sends data back if you insert it into insomnia
});




module.exports = router;