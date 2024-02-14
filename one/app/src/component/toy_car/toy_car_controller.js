import { ToyCar } from "./toy_car.js";
import { Tag } from "../tag/tag.js";

export function getToyCarCreateForm(request, response) {

}

export function createToyCar(request, response) {

}

export function getToyCarEditForm(request, response) {

}

export function updateToyCar(request, response) {

}

export function removeAllToyCars(request, response) {

}

export function removeToyCarById(request, response) {

}

export function getAllToyCars(request, response) {

}

export function getToyCarById(request, response) {

}

// exports.create = (toyCar) => ToyCar.create({
//   name: toyCar.name,
//   type: toyCar.type,
//   price: toyCar.price,
//   amount: toyCar.amount,
//   isAvailable: toyCar.isAvailable,
// })
//   .then((toyCar) => {
//     console.log(`Created ToyCar: ${JSON.stringify(toyCar, null, 2)}`);
//     return toyCar;
//   })
//   .catch((err) => {
//     console.log('Error while creating ToyCar: ', err);
//   });

// exports.addTag = (toyCarId, tagId) => Tag.findByPk(tagId)
//   .then((tag) => {
//     if (!tag) {
//       console.log('Tag not found!');
//       return null;
//     }
//     return ToyCar.findByPk(toyCarId)
//       .then((toyCar) => {
//         if (!toyCar) {
//           console.log('ToyCar not found!');
//           return null;
//         }
//         toyCar.addTag(tag);
//         console.log(`>> added Tag id=${tag.id} to ToyCar id=${toyCar.id}`);
//         return toyCar;
//       });
//   })
//   .catch((err) => {
//     console.log('>> Error while adding Tag to ToyCar: ', err);
//   });

// exports.findAll = (req, res) => ToyCar.findAll()
//   .then((toyCar) => {
//     res.send(toyCar);
//   })
//   .catch((err) => {
//     res.status(500).send({
//       message: err.message || 'Some error occurred while retrieving data',
//     });
//   });

// exports.findByPk = (req, res) => {
//   const { id } = req.params;
//   return ToyCar.findByPk(id)
//     .then((toyCar) => {
//       res.send(toyCar);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || 'Some error occurred while retrieving data',
//       });
//     });
// };
