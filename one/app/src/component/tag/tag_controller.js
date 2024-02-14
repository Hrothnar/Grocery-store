import { Tag } from "./tag.js";

export function getTagCreateForm(request, response) {
    response.send("This URL is under construction");
}

export function createTag(request, response) {
    Tag.create({
        name: request.body.name
    })
        .then((chocolateBar) => {
            console.log(`Created Tag: ${JSON.stringify(chocolateBar, null, 2)}`);
            response.send(`Created Tag: ${JSON.stringify(chocolateBar, null, 2)}`)
        })
        .catch((error) => {
            throw error;
        });
}

export function getTagEditForm(request, response) {

}

export function updateTag(request, response) {

}

export function removeAllTags(request, response) {
    Tag.destroy({ where: {} })
        .then(() => {
            response.send("All entities were deleted");
        })
        .catch((error) => {
            throw error;
        });
}

export function removeTagById(request, response) {

}

export function getAllTags(request, response) {
    Tag.findAll({})
        .then((tags) => {
            response.send(tags);
        })
        .catch((error) => {
            throw error;
        });
}

export function getTagById(request, response) {

}

// exports.create = (tag) => Tag.create({
//   name: tag.name,
// })
//   .then((tag) => {
//     console.log(`Created Tag: ${JSON.stringify(tag, null, 2)}`);
//     return tag;
//   })
//   .catch((err) => {
//     console.log('Error while creating Tag: ', err);
//   });

// exports.findAll = (req, res) => Tag.findAll()
//   .then((tags) => {
//     res.send(tags);
//   })
//   .catch((err) => {
//     res.status(500).send({
//       message: err.message || 'Some error occurred while retrieving data',
//     });
//   });

// exports.findByPk = (req, res) => {
//   const { id } = req.params;
//   return Tag.findByPk(id)
//     .then((tag) => {
//       res.send(tag);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || 'Some error occurred while retrieving data',
//       });
//     });
// };
