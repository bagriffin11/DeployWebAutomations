const express = require('express');
const router = express.Router();
const {Task} = require('../models');

//can write post and get requests 
router.get("/gettask/:id", async (req, res) =>{
   const id = req.params.id;
   const task = await Task.findAll({where: {UserId: id} });
   res.json(task);
});

router.get("/taskbusid/:id", async (req, res) =>{
    const id = req.params.id;
    const task = await Task.findAll({where: {BusinessId: id} });
    res.json(task);
 });

 router.get("/taskqueuetotal/:id", async (req, res) =>{
    const id = req.params.id;
    const task = await Task.findAll({where: {UserId: id, status: "pending"} });
    res.json(task.length);
 });

 router.get("/taskhistorytotal/:id", async (req, res) =>{
    const id = req.params.id;
    const task = await Task.findAll({where: {UserId: id, status: "complete"} });
    res.json(task.length);
 });


 router.get("/taskhistorymonth/:id", async (req, res) =>{
   const id = req.params.id;
   const task = await Task.findAll({where: {UserId: id, status: "complete"} });
   res.json(task.length);
});

//instead of send you can put json and it returns a string
router.delete("/delete/:id", async (req,res) => {
    const business = req.params.id
    await Task.destroy({where: {id: business}});
    res.json("Deleted business");
});


router.post("/", async (req, res) => {
    const task = req.body;
    await Task.create(task);
    res.json("success");
    // inserts body of variables into the table Posts
    // make async timing protocol 
    // res.json(post) sends data back if you insert it into insomnia
});




module.exports = router;