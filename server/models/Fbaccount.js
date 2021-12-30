const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {

    const Fbaccount = sequelize.define("Fbaccount",{
        username: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

  
  
    return Fbaccount;
};