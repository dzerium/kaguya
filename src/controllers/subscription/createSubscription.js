function makeCreateSubscription(createSubscriptionUc) {
  // * Get Subscription Controller
  return async function createSubscription(httpRequest) {
    const headers = { "Content-Type": "application/json" };
    let statusCode = 200;
    let body = { error: "Id not found" };

    createSubscriptionUc();

    return {
      headers,
      statusCode,
      body,
    };
  };
}

module.exports = makeGetSubscription;
