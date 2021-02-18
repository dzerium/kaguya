function makeGetCustomer({ getCustomerUc }) {
  // * Get Subscription Controller
  return async function createSubscription(httpRequest) {
    const headers = { "Content-Type": "application/json" };
    let statusCode = 400;
    let body = {};


    const { email } = httpRequest.params

    try {
      body = await getCustomerUc({ email });
      if (!body) {
        statusCode = 404
      }
    } catch (error) {
      body = { error: error.message }
    }

    return {
      headers,
      statusCode,
      body,
    };
  };
}

module.exports = makeGetCustomer;
