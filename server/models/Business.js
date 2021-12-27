
module.exports = (sequelize, DataTypes) => {

    const Business = sequelize.define("Business",{
        business: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Business.associate = (models) => {
        Business.hasMany(models.Igaccount, {
           onDelete: "cascade",
        });
            //this makes igaccount linked to posts
  }; 

    return Business;
};