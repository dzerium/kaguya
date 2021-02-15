function makeSubscription({ makeDb }) {
  return Object.freeze({
    createSubscription,
  });

  async function createSubscription({
    productId,
    customerId,
    paymentMethod,
    deliveryId,
    billingId,
  }) {}
}

module.exports = makeProduct;
