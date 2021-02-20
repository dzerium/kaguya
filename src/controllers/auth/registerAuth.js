function makeCreateAuth({ registerAuthUc }) {
  // * Register Authentication Credentials
  return async function registerAuth(httpRequest) {
    const headers = { "Content-Type": "application/json" };
    let statusCode = 201;
    let body = {};

    // * { username, password }
    const { ...authInfo } = httpRequest.body;

    try {
      const { email, role } = await registerAuthUc(authInfo);
      body = { registered: { email, role } };
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

module.exports = makeCreateAuth;
