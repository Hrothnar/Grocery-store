import { Sequelize } from "sequelize";
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

export { sequelize };