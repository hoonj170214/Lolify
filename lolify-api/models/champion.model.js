const { Datatype } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define(
    'champion', // 모델 이름
    {
      // 속성 목록 : 테이블 컬럼
      id: {
        autoIncrement: true,
        type: Datatype.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      champion: {
        type: Datatype.CHAR(10),
        allowNull: false,
      },
      runes: {
        type: Datatype.CHAR(10),
        allowNull: false,
      },
      skill: {
        type: Datatype.CHAR(10),
        allowNull: false,
      },
      spell: {
        type: Datatype.CHAR(10),
        allowNull: false,
      },
      item: {
        type: Datatype.CHAR(10),
        allowNull: true,
      },
      stat: {
        type: Datatype.CHAR(10),
        allowNull: false,
      },
    },
    {
      // 추가 옵션
      sequelize,
      tableName: 'champion',
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          field: [{ name: 'id' }],
        },
      ],
      timestamps: false,
    }
  );
};
