const { MongoClient } = require("mongodb");

const makeCustomerDb = require("./customerDb");

const url = process.env.DB_HOST_URL;
const dbName = process.env.DB_NAME;

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function makeDb() {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db(dbName);
}

const customerDb = makeCustomerDb({ makeDb });

module.exports = { customerDb };
