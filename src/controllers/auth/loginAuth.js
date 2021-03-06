function makeLoginAuth({ loginAuthUc }) {
  // * Login Authentication Credentials
  return async function loginAuth(httpRequest) {
    const headers = { "Content-Type": "application/json" };
    let statusCode = 201;
    let body = {};

    // * { username, password }
    const { ...authInfo } = httpRequest.body;

    try {
      const result = await loginAuthUc(authInfo);
      body = { authToken: result };
    } catch (error) {
      statusCode = 400;
      body = { error: error.message };
    }

    return {
      headers,
      statusCode,
      body,
    };
  };
}

module.exports = makeLoginAuth;
