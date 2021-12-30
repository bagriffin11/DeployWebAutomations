const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {

    const Igaccount = sequelize.define("Igaccount",{
        username: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
  
  
    return Igaccount;
};