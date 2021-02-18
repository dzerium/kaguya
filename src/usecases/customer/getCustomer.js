function makeGetCustomer({ customerDb }) {
  // * Get Subscription Use-case
  return async function getCustomer({ email } = {}) {
    if (!email) {
      throw new Error("Email should be supplied");
    }

    const customer = await customerDb.findCustomerByEmail({ email });

    return customer;
  };
}

module.exports = makeGetCustomer;
