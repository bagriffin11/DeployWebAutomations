const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json()); //allows for json to be used in insomnia 
app.use(cors());

const db = require("./models");


const userRouter = require('./routes/User');
app.use("/user", userRouter); //type in the browser localhost:3001/posts to view

const igRouter = require('./routes/Igaccount');
app.use("/igaccount", igRouter);

const igactionRouter = require('./routes/Igaction');
app.use("/igaction", igactionRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
    console.log('server running on port 3001')
   }); 
});