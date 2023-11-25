const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('product', {
    id: {type: DataTypes.BIGINT, allowNull: false, unique: true, autoIncrement: true, field: 'id', primaryKey: true},
    productType: {type: DataTypes.STRING, allowNull: false, field: 'product_type'},
    productTypeId: {type: DataTypes.BIGINT, allowNull: false, field: 'product_type_id'},
  });
};
