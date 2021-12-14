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
    
  
    return Emailaccount;
};