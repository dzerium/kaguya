const AUTH_TABLE = "auth";

function makeAuth({ makeDb }) {
  return Object.freeze({
    registerAuth,
    findAuthByEmail,
    matchCredentials,
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
    const result = await client[AUTH_TABLE].findDoc({ email });

    if (result.length === 0) {
      return null;
    }
    return result[0];
  }

  // * find credentials by email
  async function matchCredentials({ email, password }) {
    const client = await makeDb();
    const result = await client[AUTH_TABLE].findDoc({ email, password });

    if (result.length === 0) {
      return null;
    }
    return result[0];
  }
}

module.exports = makeAuth;
