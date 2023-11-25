const { DataTypes } = require('sequelize');

const uppercaseFirst = str => `${str[0].toUpperCase()}${str.substr(1)}`;

class Tag {
    getTaggable() {
      if (!this.commentableType) return Promise.resolve(null);
      const mixinMethodName = `get${uppercaseFirst(this.commentableType)}`;
      return this[mixinMethodName](options);
    }
}

module.exports = (sequelize) => {
  const Tag = sequelize.define('tag', {
    id: { type: DataTypes.BIGINT, allowNull: false, unique: true, autoIncrement: true, field: 'id', primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true, field: 'name' },
    taggableType: { type: DataTypes.STRING, allowNull: false, unique: false, field: 'taggable_type' },
    taggableId: { type: DataTypes.BIGINT, allowNull: false, unique: false, field: 'taggable_id' },
  }, {
    timestamps: false
  });
  return Tag;
};
