module.exports = (sequelize, DataTypes) => {

    const Igaccount = sequelize.define("Igaccount",{
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        igpassword: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    
  
    return Igaccount;
};