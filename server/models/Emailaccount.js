const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {

    const Emailaccount = sequelize.define("Emailaccount",{
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Emailaccount.beforeCreate((emailaccount, options) => {
        return bcrypt.hash(emailaccount.password, 10)
            .then(hash => {
                emailaccount.password = hash;
            })
            .catch(err => { 
                throw new Error(); 
            });
    });
    
  
    return Emailaccount;
};