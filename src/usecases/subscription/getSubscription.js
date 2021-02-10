function createGetSubscription({ subscriptionDb }) {
  // * Get Subscription Use-case
  return async function getSubscription({ id } = {}) {
    const subscription = await subscriptionDb.findById({ id });

    return subscription;
  };
}

module.exports = createGetSubscription;
