
module.exports = (sequelize, DataTypes) => {

    const Business = sequelize.define("Business",{
        business: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Business.associate = (models) => {
        Business.hasOne(models.Igaccount, {
           onDelete: "cascade",
        });
        Business.hasOne(models.Emailaccount,{
            onDelete: "cascade"
        });
        Business.hasOne(models.Fbaccount,{
            onDelete: "cascade"
        });
            //this makes igaccount linked to posts
  }; 

    return Business;
};