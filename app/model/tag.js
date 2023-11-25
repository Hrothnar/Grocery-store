const { DataTypes } = require('sequelize');
const uppercaseFirst = str => `${str[0].toUpperCase()}${str.substr(1)}`;

class Tag {
    getTaggable() {

    }
}

module.exports = (sequelize) => {
  const Tag = sequelize.define('tag', {
    id: { type: DataTypes.BIGINT, allowNull: false, unique: true, autoIncrement: true, field: 'id', primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true, field: 'name' },
    taggableType: { type: DataTypes.STRING, allowNull: false, unique: false, field: 'taggable_type' },
    taggableTypeId: { type: DataTypes.BIGINT, allowNull: false, unique: false, field: 'taggable_type_id' },
  });
  return Tag;
};
