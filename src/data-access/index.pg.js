const { Pool } = require("pg");

const makeCustomerDb = require("./customer");

const { PG_USER, PG_PASS, PG_HOST, PG_DB, PG_PORT, PG_SSL } = process.env;

const pool = new Pool({
  user: PG_USER,
  password: PG_PASS,
  host: PG_HOST,
  database: PG_DB,
  port: PG_PORT,
  ssl: PG_SSL,
});

pool.on("error", (err) => {
  console.error("Unexpected error on client", err);
  process.exit(-1);
});

async function makeDb() {
  return pool;
}

async function destroyDb() {
  await pool.end();
}

customerDb = makeCustomerDb({ makeDb });

module.exports = { customerDb };
