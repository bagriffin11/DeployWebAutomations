

module.exports = (sequelize, DataTypes) => {

    const Info = sequelize.define("Info",{
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        degree: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        college: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });


  
    return Info;
};