import { Model, DataTypes } from "sequelize";
import { sequelize } from "../configuration/db_config.js";

class Tag extends Model {

    async getTaggables(options) {
        const toyCar = await this.getToyCars(options);
        const lamp = await this.getLamps(options);
        const chocolateBar = await this.getChocolateBars(options);
        const all = toyCar.concat(lamp, chocolateBar);
        return all;
    }
}

Tag.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: "name",
    },
}, {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Tag",
    tableName: "tags",
})

// /**
//  * A Sequelize hook which intercepts responses after finding Tag. 
//  * This hook created for eager model loading, it automatically populates the taggable field in every instance.
//  */
// Tag.addHook("afterFind", (tags) => {
//     if (!Array.isArray(tags)) {
//         tags = [tags];
//     }

//     const taggableList = {
//         toyCar: "toyCar",
//         lamp: "lamp",
//         chocolateBar: "chocolateBar"
//     };

//     for (const tag of tags) {
//         const taggableType = tag.taggableType;
//         const taggableProperty = taggableList[taggableType];
//         if (taggableProperty && tag[taggableProperty]) {

//             tag.taggable = tag[taggableProperty];
//             /**
//              * These actions will not allow to interact with the taggable object directly. tag.toyCar, for example.
//              * Should get objects (whenever type they are) from a tag through the "taggable" field.
//              */
//             delete tag[taggableProperty];
//             delete tag.dataValues[taggableProperty];
//         }
//     }
// });

export { Tag };