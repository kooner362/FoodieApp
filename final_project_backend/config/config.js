require('dotenv').config();

console.log(process.env.DB_USER)
module.exports = {
  
  development: {
    dialect: "postgres",
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME
  },
  test: {
    dialect: "pg",
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'pg',
    use_env_variable: 'DATABASE_URL'
  }
};
