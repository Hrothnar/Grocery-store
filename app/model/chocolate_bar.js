const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ChocolateBar = sequelize.define('chocolateBar', {
    id: { type: DataTypes.BIGINT, allowNull: false, unique: true, autoIncrement: true, field: 'id', primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true, field: 'name' },
    type: { type: DataTypes.STRING, allowNull: false, unique: false, field: 'type' },
    tags: { type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: true, unique: false, field: 'tags' },
    price: { type: DataTypes.DOUBLE, allowNull: true, unique: false, field: 'price' },
    amount: { type: DataTypes.INTEGER, allowNull: false, unique: false, field: 'amount' },
    isAvailable: { type: DataTypes.BOOLEAN, allowNull: false, unique: false, field: 'is_available' },
  });
  return ChocolateBar;
};
