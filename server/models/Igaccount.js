const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {

    const Igaccount = sequelize.define("Igaccount",{
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Igaccount.beforeCreate((igaccount, options) => {
        return bcrypt.hash(igaccount.password, 10)
            .then(hash => {
                igaccount.password = hash;
            })
            .catch(err => { 
                throw new Error(); 
            });
    });

   

  
  
    return Igaccount;
};