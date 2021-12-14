    const bcrypt = require('bcrypt')

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

    User.beforeCreate((user, options) => {
        return bcrypt.hash(user.password, 10)
            .then(hash => {
                user.password = hash;
            })
            .catch(err => { 
                throw new Error(); 
            });
    });
    //crypted password

    User.associate = (models) => {
        User.hasMany(models.Igaccount, {
           onDelete: "cascade",
        });
            //this makes igaccount linked to posts
  }; 
  
    return User

};
//success
