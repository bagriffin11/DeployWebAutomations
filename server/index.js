const express = require('express');
const app = express();
const cors = require("cors");
const {User} = require("./models");
const bcrypt = require('bcrypt')



app.use(express.json()); //allows for json to be used in insomnia 
app.use(cors());

const db = require("./models");


const userRouter = require('./routes/User');
app.use("/user", userRouter); //type in the browser localhost:3001/posts to view

const igRouter = require('./routes/Igaccount');
app.use("/igaccount", igRouter);

const fbRouter = require('./routes/Fbaccount');
app.use("/fbaccount", fbRouter);

const emailRouter = require('./routes/Emailaccount');
app.use("/emailaccount", emailRouter);

/*
const igactionRouter = require('./routes/Igaction');
const User = require('./models/User');
app.use("/igaction", igactionRouter); */
app.post("/login", async (req,res) => {
    const {email, password} = req.body;
    const user = await User.findOne({where: {email: email}});
    if (!user) res.status(400).json({error: "user doesnt exist"});

    const dbPassword = user.password;
    bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
            res.status(400).json({error: "Wrong username and password"});
        }
        else {
                res.json("Logged in");
        }
    });
});

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
    console.log('server running on port 3001')
   }); 
});