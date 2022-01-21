    const bcrypt = require('bcryptjs')

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
/*
    User.beforeCreate((user) => {
        return bcrypt.hash(user.password, 4)
            .then(hash => {
                user.password = hash;
            })
            .catch(err => { 
                throw new Error(); 
            });
    });*/
    //crypted password

    User.associate = (models) => {
        User.hasMany(models.Business, {
           onDelete: "cascade",
        });
        User.hasOne(models.Info,{
            onDelete: "cascade"
        });

        User.hasMany(models.Task,{
            onDelete: "cascade"
        });
            //this makes igaccount linked to posts
  }; 
 
    
 
  
    return User

};
//success
