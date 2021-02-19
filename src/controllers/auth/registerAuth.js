function makeCreateCustomer({ registerAuthUc }) {
  // * Create Customer Controller
  return async function createCustomer(httpRequest) {
    const headers = { "Content-Type": "application/json" };
    let statusCode = 201;
    let body = {};

    // * { username, password }
    const { ...authInfo } = httpRequest.body;

    try {
      const { email } = await registerAuthUc(authInfo);
      body = { registered: email };
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

module.exports = makeCreateCustomer;
