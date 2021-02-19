const AUTH_TABLE = "auth";

function makeAuth({ makeDb }) {
  return Object.freeze({
    registerAuth,
  });

  // * register a user - password authentication
  async function registerAuth({ ...authInfo }) {
    const client = await makeDb();
    const result = await client.saveDoc(AUTH_TABLE, authInfo);
    return result;
  }
}

module.exports = makeAuth;
