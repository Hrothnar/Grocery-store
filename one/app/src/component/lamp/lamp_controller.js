import { Lamp } from "./lamp.js";
import { Tag } from "../tag/tag.js";

export function getLampCreateForm(request, response) {

};

export function createLamp(request, response) {

};

export function getLampEditForm(request, response) {

};

export function updateLamp(request, response) {

};

export function removeAllLamp(request, response) {

};

export function removeLampById(request, response) {

};

export function getAllLamps(request, response) {

};

export function getLampById(request, response) {

};

// exports.create = (lamp) => Lamp.create({
//   name: lamp.name,
//   type: lamp.type,
//   price: lamp.price,
//   amount: lamp.amount,
//   isAvailable: lamp.isAvailable,
// })
//   .then((lamp) => {
//     console.log(`Created Lamp: ${JSON.stringify(lamp, null, 2)}`);
//     return lamp;
//   })
//   .catch((err) => {
//     console.log('>> Error while creating Lamp: ', err);
//   });

// exports.addTag = (lampId, tagId) => Tag.findByPk(tagId)
//   .then((tag) => {
//     if (!tag) {
//       console.log('Tag not found!');
//       return null;
//     }
//     return Lamp.findByPk(lampId)
//       .then((lamp) => {
//         if (!lamp) {
//           console.log('Lamp not found!');
//           return null;
//         }
//         lamp.addTag(tag);
//         console.log(`Added Tag id=${tag.id} to Lamp id=${lamp.id}`);
//         return lamp;
//       });
//   })
//   .catch((err) => {
//     console.log('>> Error while adding Tag to Lamp: ', err);
//   });

// exports.findAll = (req, res) => Lamp.findAll()
//   .then((lamp) => {
//     res.send(lamp);
//   })
//   .catch((err) => {
//     res.status(500).send({
//       message: err.message || 'Some error occurred while retrieving data',
//     });
//   });

// exports.findByPk = (req, res) => {
//   const { id } = req.params;
//   return Lamp.findByPk(id)
//     .then((lamp) => {
//       res.send(lamp);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || 'Some error occurred while retrieving data',
//       });
//     });
// };
