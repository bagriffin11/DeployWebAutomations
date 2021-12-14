const express = require('express');
const router = express.Router();
const {User} = require("../models");



//can write post and get requests 
router.get("/", async (req, res) =>{
    //res.json("helloworld");
    const listOfUsers = await User.findAll()
    res.json(listOfUsers);
});
//instead of send you can put json and it returns a string
//how to get table data by id
router.get("/byId/:id", async (req,res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    res.json(user);
});

router.post("/", async (req, res) => {
    const user = req.body;
    await User.create(user);
    res.json(user);
    // inserts body of variables into the table Posts
    // make async timing protocol 
    // res.json(post) sends data back if you insert it into insomnia
});




router.delete("/delete", (req, res) =>{
    res.send("delete");
})

module.exports = router;