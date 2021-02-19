const AUTH_TABLE = "auth";

function makeAuth({ makeDb }) {
  return Object.freeze({
    registerAuth,
    findAuthByEmail,
  });

  // * register a user - password authentication
  async function registerAuth({ ...authInfo }) {
    const client = await makeDb();
    const result = await client.saveDoc(AUTH_TABLE, authInfo);
    return result;
  }

  // * find credentials by email
  async function findAuthByEmail({ email }) {
    const client = await makeDb();

    if (!client[AUTH_TABLE]) {
      await client.createDocumentTable(AUTH_TABLE);
    }
    const result = await client[AUTH_TABLE].findDoc({ email });

    if (result.length === 0) {
      return null;
    }
    return result[0];
  }
}

module.exports = makeAuth;
