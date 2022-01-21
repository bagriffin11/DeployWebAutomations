
module.exports = (sequelize, DataTypes) => {

    const Business = sequelize.define("Business",{
        business: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        igusername: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        igpassword: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fbusername: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fbpassword: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        emailusername: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        emailpassword: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

    Business.associate = (models) => {
        Business.hasMany(models.Task, {
           onDelete: "cascade",
        });
  }; 

    return Business;
};