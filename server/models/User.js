const Igaccount = require("./Igaccount");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User",{
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }

       
    });

    User.associate = (models) => {
        User.hasOne(models.Igaccount, {
           onDelete: "cascade",
        });
            //this makes igaccount linked to posts
  }; 
  
    return User

};
//success
