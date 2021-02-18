const massive = require("massive");

const makeCustomerDb = require("./customer");

const { PG_USER, PG_PASS, PG_HOST, PG_DB, PG_PORT, PG_SSL } = process.env;

let client = null

async function makeDb() {
  if (!client) {
    client = await massive({
      user: PG_USER,
      password: PG_PASS,
      host: PG_HOST,
      database: PG_DB,
      port: PG_PORT,
      ssl: PG_SSL === 'true'
    }, {
      documentPkType: 'uuid'
    });
  }
  return client
}

customerDb = makeCustomerDb({ makeDb });

module.exports = { customerDb };
