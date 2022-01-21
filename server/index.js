const express = require('express');
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const {validateToken} = require("./jwt/Jwt")
require('dotenv').config()

app.use(express.json()); //allows for json to be used in insomnia 
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}));
app.use(cookieParser());


const db = require("./models");


const userRouter = require('./routes/User');
app.use("/user", userRouter); //type in the browser localhost:3001/posts to view
//make into /auth so it links to all the other pages 

const businessRouter = require('./routes/Business');
app.use("/business", businessRouter);

const infoRouter = require('./routes/Info');
app.use("/info", infoRouter);

const taskRouter = require('./routes/Task');
app.use("/task", taskRouter);

//must pass in validate token into each api call (leave async)
app.get("/auth", validateToken, (req, res) => {
  if (validateToken){
      res.send(true);
  }
  else {
      res.send(false);
  }
    
})


db.sequelize.sync().then(() => {
    app.listen(3001, () => {
    console.log('server running on port 3001')
   });
});