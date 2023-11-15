const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define({
    'stat',{
      id: {
        autoIncrease: false,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      //{

      //}
    }
  });
};
