import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(import.meta.dirname, "../../../../.env") });

const dbHost = process.env.POSTGRES_HOST_TWO;
const dbName = process.env.POSTGRES_DB_TWO;
const dbUser = process.env.POSTGRES_USER_TWO;
const dbPassword = process.env.POSTGRES_PASSWORD_TWO;
const dbDialect = process.env.DB_DIALECT_TWO;
const dbPort = process.env.DB_PORT_TWO;

const connectionParameters = {
  host: dbHost,
  port: dbPort,
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