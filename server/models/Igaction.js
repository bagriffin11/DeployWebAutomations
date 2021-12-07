module.exports = (sequelize, DataTypes) => {

    const Igaction = sequelize.define("Igaction",{
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    
  
    return Igaction;
};