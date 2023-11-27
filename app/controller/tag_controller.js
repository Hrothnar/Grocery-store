const db = require("../model/init.js");
const Tag = db.tags;

exports.create = (tag) => {
    return Tag.create({
        name: tag.name
    })
    .then((tag) => {
        console.log(">> Created Tag: " + JSON.stringify(tag, null, 2));
        return tag;
      })
      .catch((err) => {
        console.log(">> Error while creating Tag: ", err);
      });
  };

  exports.findAll = (req, res) => {
    return Tag.findAll()
      .then((tags) => {
        res.send(tags);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving data"
        });
      });
  };

  exports.findByPk = (req, res) => {
    const id = req.params.id;
    console.log(id);
    return Tag.findByPk(id)
    .then((tag) => {
      console.log(tag);
      res.send(tag);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data"
      });
    });
  }