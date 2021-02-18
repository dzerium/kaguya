const CUSTOMER_TABLE = "customer"

function makeCustomer({ makeDb }) {
  return Object.freeze({
    createCustomer,
    findCustomerByEmail
  });

  async function createCustomer(customerInfo) {
    const client = await makeDb();
    const result = await client.saveDoc(CUSTOMER_TABLE, customerInfo);
    return result
  }

  async function findCustomerByEmail({ email }) {
    const client = await makeDb();
    const result = await client[CUSTOMER_TABLE].findDoc({ email })

    if (result.length === 0) {
      return null
    }
    return result[0]
  }
}

module.exports = makeCustomer;
