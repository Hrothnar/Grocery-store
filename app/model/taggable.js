const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Taggable = sequelize.define('taggable', {
    tagId: {
      type: DataTypes.BIGINT, allowNull: false, unique: true, autoIncrement: true, field: 'tag_id', primaryKey: true,
    },
    taggableType: {
      type: DataTypes.STRING, allowNull: true, unique: false, field: 'taggable_type',
    },
    taggableId: {
      type: DataTypes.BIGINT, allowNull: true, unique: false, field: 'taggable_id', references: null,
    },
  }, {
    timestamps: false,
    tableName: 'taggables',
  });
  return Taggable;
};
