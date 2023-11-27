module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "nbv",
  DB: "node_js",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
