function createGetSubscription(getSubscriptionUc) {
  // * Get Subscription Controller
  return async function getSubscription(httpRequest) {
    const headers = { "Content-Type": "application/json" };
    let statusCode = 200;
    let body = { error: "Id not found" };

    return {
      headers,
      statusCode,
      body,
    };
  };
}

module.exports = createGetSubscription;
