function makeCreateCustomer({ createCustomerUc }) {
  // * Create Customer Controller
  return async function createCustomer(httpRequest) {
    const headers = { "Content-Type": "application/json" };
    let statusCode = 201;
    let body = {};

    const { ...customerInfo } = httpRequest.body

    try {
      const result = await createCustomerUc(customerInfo);
      body = { createdCustomer: result }
    } catch (error) {
      statusCode = 400
      body = { error: error.message}
    }

    return {
      headers,
      statusCode,
      body,
    };
  };
}

module.exports = makeCreateCustomer;
