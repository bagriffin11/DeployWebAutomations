const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {

    const Fbaccount = sequelize.define("Fbaccount",{
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Fbaccount.beforeCreate((fbaccount, options) => {
        return bcrypt.hash(fbaccount.password, 10)
            .then(hash => {
                fbaccount.password = hash;
            })
            .catch(err => { 
                throw new Error(); 
            });
    });
    
  
    return Fbaccount;
};