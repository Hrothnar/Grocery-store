const TagController = require("./app/controller/tag_controller.js");
const ToyCarController = require("./app/controller/toy_car_controller.js");
const LampController = require("./app/controller/lamp_controller.js");
const ChocolateBarController = require("./app/controller/chocolate_bar_controller.js");

exports.run = async () => {
    const tag1 = await TagController.create({
      name: "Tag One"
    });
    
    const tag2 = await TagController.create({
      name: "Tag Two"
    });

    const tag3 = await TagController.create({
        name: "Tag Three"
    });

    const toyCar1 = await ToyCarController.create({
      name: "ToyCar name One",
      type: "Toy",
      price: 19.45,
      amount: "75",
      isAvailable: true
    });

    const attachTag1 = await ToyCarController.addTag(1, 2);

  };