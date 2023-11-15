const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define(
    'item',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      // 스탯
      stat: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      // 설명
      desc: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      // 신화템 지속효과
      effect: {
        type: DataTypes.CHAR(50),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'item',
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          field: [{ name: 'id' }],
        },
        {
          name: 'nameStatDesc',
          unique: true,
          field: [{ name: 'name' }, { name: 'stat' }, { name: 'desc' }],
        },
      ],
      tiemstamps: false,
    }
  );
};
