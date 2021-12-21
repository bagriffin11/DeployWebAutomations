const {sign, verify} = require("jsonwebtoken")

const createTokens = (user) => {
    const accessToken = sign(
        { email: user.email, id: user.id},
         "jwtsecret");

   // const id = accessToken.id; this is how you get the id
         return accessToken;
};

//Add middleware
//validates if the token exists pass to profile 
const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"]

    if (!accessToken) return res.status(400).json({error: "User not Authenticated"});

    try{
         
         const validToken = verify(accessToken, "jwtsecret")
        if (validToken){
            req.authenticated = true;
            req.user = validToken;
            return next();
        }
    }catch(err){
        return res.status(400).json({error: err});
    }

};

module.exports = {createTokens, validateToken}

//make sure to use a .env file to pass in the token secret.
//look up refresh tokens which makes new tokens per user