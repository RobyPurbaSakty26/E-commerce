// const {
//   DB_USER = "postgres",
//   DB_PASSWORD = "oby",
//   DB_HOST = "127.0.0.1",
//   DB_NAME = "ecommerce",
//   DB_PORT = "5432",
// } = process.env;
// const {
//   DB_USER = "uraz38phhjsw2nnpmt0b",
//   DB_PASSWORD = "uMkLjSsGa0cGdNy3VXEwAnkd2z1YwU",
//   DB_HOST = "bz4o6psksh70keew1zm6-postgresql.services.clever-cloud.com",
//   DB_NAME = "bz4o6psksh70keew1zm6",
//   DB_PORT = "5432",
// } = process.env;

// const {
//   DB_HOST = "containers-us-west-70.railway.app",
//   DB_NAME = "railway",
//   DB_PASSWORD = "BuNUp3io3UFlnoUhijPn",
//   DB_PORT = "5433",
//   DB_USER = "postgres",
//   JWT_SIGNATURE_KEY = "Rahasia",
// } = process.env;

// const {

//   DB_USER = "sql12615715",
//   DB_HOST = "sql12.freesqldatabase.com",
//   DB_PASSWORD = "nfwWFMM6Pt",
//   DB_NAME = "sql12615715",
//   DB_PORT = "3306",
// } = process.env;

const {
  DB_USER = "ultfwtemejpovg7j",
  DB_HOST = "b97tnaaosdapbosj7rqc-mysql.services.clever-cloud.com",
  DB_PASSWORD = "SJcmozTwS6SfIEa3pEqQ",
  DB_NAME = "b97tnaaosdapbosj7rqc",
  DB_PORT = "3306",
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "mysql",
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "mysql",
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "mysql",
  },
};
