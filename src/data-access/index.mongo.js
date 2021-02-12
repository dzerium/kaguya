const { MongoClient } = require("mongodb");

const makeStockDb = require("./stock-db");

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

const stockDb = makeStockDb({ makeDb });
const staticDb = makeStaticDb({ makeDb });
const stockHistoryDb = makeStockHistoryDb({ makeDb });

module.exports = { stockDb, staticDb, stockHistoryDb };
