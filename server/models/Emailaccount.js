const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {

    const Emailaccount = sequelize.define("Emailaccount",{
        username: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

  
    return Emailaccount;
};