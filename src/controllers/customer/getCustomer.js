function makeGetCustomer(getCustomerUc) {
  // * Get Subscription Controller
  return async function createSubscription(httpRequest) {
    const headers = { "Content-Type": "application/json" };
    let statusCode = 200;
    let body = { error: "Id not found" };

    getCustomerUc();

    return {
      headers,
      statusCode,
      body,
    };
  };
}

module.exports = makeGetCustomer;
