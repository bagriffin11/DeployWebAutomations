
module.exports = (sequelize, DataTypes) => {

    const Task = sequelize.define("Task",{
        account: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        business: {
            type: DataTypes.STRING,
            allowNull: false,
        },
      
        action: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

   
    return Task;
};