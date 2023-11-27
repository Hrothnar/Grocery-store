const db = require('../model/init.js')
const ChocolateBar = db.chocolateBars;
const Tag = db.tags;

exports.create = (chocolateBar) => ChocolateBar.create({
  name: chocolateBar.name,
  type: chocolateBar.type,
  price: chocolateBar.price,
  amount: chocolateBar.amount,
  isAvailable: chocolateBar.isAvailable,
})
  .then((chocolateBar) => {
    console.log(`Created ChocolateBar: ${JSON.stringify(chocolateBar, null, 2)}`);
    return chocolateBar;
  })
  .catch((err) => {
    console.log('Error while creating ChocolateBar: ', err);
  });

exports.addTag = (chocolateBarId, tagId) => Tag.findByPk(tagId)
  .then((tag) => {
    if (!tag) {
      console.log('Tag not found');
      return null;
    }
    return ChocolateBar.findByPk(chocolateBarId)
      .then((chocolateBar) => {
        if (!chocolateBar) {
          console.log('ChocolateBar not found!');
          return null;
        }
        chocolateBar.addTag(tag);
        console.log(`Added Tag id=${tag.id} to ChocolateBar id=${chocolateBar.id}`);
        return chocolateBar;
      });
  })
  .catch((err) => {
    console.log('Error while adding Tag to ChocolateBar: ', err);
  });

exports.findAll = (req, res) => ChocolateBar.findAll()
  .then((chocolateBar) => {
    res.send(chocolateBar);
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving data',
    });
  });

exports.findByPk = (req, res) => {
  const { id } = req.params;
  return ChocolateBar.findByPk(id)
    .then((chocolateBar) => {
      res.send(chocolateBar);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving data',
      });
    });
};
