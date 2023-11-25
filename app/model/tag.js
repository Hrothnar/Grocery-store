const { DataTypes } = require('sequelize');

class Tag {
  async getTaggables(options) {
    const toyCar = await this.getToyCars(options);
    const lamp = await this.getLamps(options);
    const chocolateBar = await this.getChocolateBars(options);
    toyCar.concat(lamp);
    toyCar.concat(chocolateBar);
    return toyCar;
  }
}

module.exports = (sequelize) => {
  const Tag = sequelize.define('tag', {
    name: { type: DataTypes.STRING, allowNull: false, unique: true, field: 'name' },
  }, {
    timestamps: false
  });
  return Tag;
};
