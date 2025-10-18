require('dotenv').config();
const oracledb = require('oracledb');

async function getConnection() {
  return await oracledb.getConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionString: process.env.DB_CONNECT_STRING // e.g., "localhost/XEPDB1"
  });
}

module.exports = { getConnection };