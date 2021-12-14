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
    
  
    return Igaccount;
};