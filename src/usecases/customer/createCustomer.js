function makeCreateCustomer({ customerDb }) {
  // * Get Subscription Use-case
  return async function getCustomerById({ id } = {}) {
    if (!id) {
      throw new Error("Id should be supplied");
    }

    const customer = await customerDb.getCustomerById({ id });

    return customer;
  };
}

module.exports = makeCreateCustomer;
