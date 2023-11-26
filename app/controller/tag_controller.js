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

  exports.findAll = () => {
    return Tag.findAll({   
    })
      .then((tags) => {
        return tags;
      })
      .catch((err) => {
        console.log(">> Error while retrieving Tags: ", err);
      });
  };

  exports.findByPk = (tagId) => {
    return Tag.findByPk({
      tagId: tagId
    })
    .then((tag) => {
      console.log(tag);
        return tag;
    })
    .catch((err) => {
        console.log(">> Error while retrieving Tag: ", err);
    })
  }