const express = require('express');
const router = express.Router();
const {User} = require("../models");
const bcrypt = require("bcrypt");
const {createTokens, validateToken} = require("../jwt/Jwt")

//can write post and get requests 
router.get("/", async (req, res) =>{ 
    //res.json("helloworld");
    const listOfUsers = await User.findAll()
    res.json(listOfUsers);
});
router.get("/byId/:id", async (req,res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    res.json(user);
}); 
//findbypk finds the user info according to id. this is great for dashboard etc.

router.get("/getid",validateToken, async (req, res) => {
    const id = req.user.id;
    res.json(id);
})

router.get("/getname",validateToken, async (req, res) => {
    const name = req.user.name;
    res.json(name);
})

//this is great for setting the global param for id. grabs the data from validateToken



router.post("/", async (req, res) => {
  const {fullname, email, password} = req.body;
  bcrypt.hash(password, 10).then((hash) => {
      User.create({
          fullname: fullname,
          email: email,
          password: hash,
      });
      res.json("success");
  });
}); 



router.post("/register", async (req, res) => {
    const {email} = req.body;
    const user = await User.findOne({where: {email: email}});
    if (!user) {
        res.status(400).json({error: "user doesnt exist"
    });
    }
    else {
    const accessToken = createTokens(user)

    res.cookie("access-token", accessToken, {
        maxAge: 60*60*24*30*1000,
        httpOnly: true,
    }); 
     res.json(accessToken);
    }
});

router.post("/login", async (req,res) => {
    const {email, password} = req.body;
    const user = await User.findOne({where: {email: email}});
    if (!user) res.status(400).json({error: "user doesnt exist"});

    const dbPassword = user.password;
    bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
            res.status(400).json({error: "Wrong username and password"});
        }
        else {

            const accessToken = createTokens(user)
            
            res.cookie("access-token", accessToken,{
                maxAge: 60*60*24*30*1000,
                httpOnly: true,
            });
                res.json(accessToken);
        }
    });
});

//put random string generator for secret and import it from a file

router.delete("/delete", (req, res) =>{
    res.send("delete");
})

module.exports = router;