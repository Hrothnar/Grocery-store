const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ToyCar = sequelize.define('toyCar', {
    id: {
      type: DataTypes.BIGINT, allowNull: false, unique: true, autoIncrement: true, field: 'id', primaryKey: true
    },
    name: {
      type: DataTypes.STRING, allowNull: false, unique: true, field: 'name',
    },
    type: {
      type: DataTypes.STRING, allowNull: false, unique: false, field: 'type',
    },
    price: {
      type: DataTypes.DOUBLE, allowNull: true, unique: false, field: 'price',
    },
    amount: {
      type: DataTypes.INTEGER, allowNull: false, unique: false, field: 'amount',
    },
    isAvailable: {
      type: DataTypes.BOOLEAN, allowNull: false, unique: false, field: 'is_available',
    },
  }, {
    timestamps: false,
    tableName: 'toy_cars',
  });
  return ToyCar;
};
