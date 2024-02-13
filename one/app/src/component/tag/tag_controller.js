import { Tag } from "./tag.js";

export function getTagCreateForm(request, response) {

};

export function createTag(request, response) {

};

export function getTagEditForm(request, response) {

};

export function updateTag(request, response) {

};

export function removeAllTag(request, response) {

};

export function removeTagById(request, response) {

};

export function getAllTags(request, response) {

};

export function getTagById(request, response) {

};

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
