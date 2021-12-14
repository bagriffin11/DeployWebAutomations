module.exports = (sequelize, DataTypes) => {

    const Fbaccount = sequelize.define("Fbaccount",{
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    
  
    return Fbaccount;
};