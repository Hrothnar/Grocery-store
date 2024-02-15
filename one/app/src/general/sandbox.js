import { Sequelize, Model, DataTypes } from "sequelize";

import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(import.meta.dirname, "../../../../.env") });

const dbHost = process.env.POSTGRES_HOST_ONE;
const dbName = process.env.POSTGRES_DB_ONE;
const dbUser = process.env.POSTGRES_USER_ONE;
const dbPassword = process.env.POSTGRES_PASSWORD_ONE;
const dbDialect = process.env.DB_DIALECT_ONE;

const connectionParameters = {
    HOST: dbHost,
    dialect: dbDialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
};

const sequelize = new Sequelize(dbName, dbUser, dbPassword, connectionParameters);

class Product extends Model { }

Product.init({
    title: Sequelize.STRING
}, { sequelize, modelName: 'product' });

class User extends Model { }
User.init({
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
}, { sequelize, modelName: 'user' });

class Address extends Model { }
Address.init({
    type: DataTypes.STRING,
    line1: Sequelize.STRING,
    line2: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.STRING,
}, { sequelize, modelName: 'address' });

// We save the return values of the association setup calls to use them later
Product.User = Product.belongsTo(User);
User.Addresses = User.hasMany(Address);
// Also works for `hasOne`

console.dir(Product.User);
// console.dir(User);


Product.create({
    title: 'Chair',
    user: { // first nested object. The nesting of this object setup in the include option
        firstName: 'Mick',
        lastName: 'Broadstone',
        addresses: [{ // second nested object. The nesting of this object setup in the include option
            type: 'home',
            line1: '100 Main St.',
            city: 'Austin',
            state: 'TX',
            zip: '78704'
        }]
    }
}, {
    include: [{ // tells sequelize to create new User and Address along with Product 
        association: Product.User,
        include: [User.Addresses]
    }]
});

const Creator = Product.belongsTo(User,
    {
        as: 'creator' // alias for a related object. It would be "User" without it
    }
);

Product.create({
    title: 'Chair',
    creator: {
        firstName: 'Matt',
        lastName: 'Hansen'
    }
}, {
    include: [Creator]
});


class Tag extends Model {}

Product.hasMany(Tag);

Product.create({
    id: 1,
    title: 'Chair',
    tags: [
      { name: 'Alpha'},
      { name: 'Beta'}
    ]
  }, {
    include: [ Tag ]
  })