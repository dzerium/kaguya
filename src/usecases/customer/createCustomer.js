const { makeCustomer } = require("../../entities");

function makeCreateCustomer({ customerDb, validateAddress }) {
  // * Get Subscription Use-case
  return async function createCustomer(customerInfo) {
    const customer = makeCustomer(customerInfo)

    const existingCustomer = await customerDb.findCustomerByEmail({ email: customer.getEmail()})
    if (existingCustomer) {
      return existingCustomer;
    }

    const result = validateAddress({
      country: customer.getCountry(),
      zip: customer.getZip(),
      city: customer.getCity(),
      street: customer.getStreet(),
      houseNumber: customer.getHouseNumber(),
    })
    if (!result) {
      throw new Error('Address must be valid')
    }

    const createdCustomer = await customerDb.createCustomer(
      {
        email: customer.getEmail(),
        firstname: customer.getFirstName(),
        lastname: customer.getLastName(),
        state: customer.getState(),
        billingAddress: {
          country: customer.getCountry(),
          zip: customer.getZip(),
          city: customer.getCity(),
          street: customer.getStreet(),
          houseNumber: customer.getHouseNumber()
        }
      }
    )

    return createdCustomer;
  };
}

module.exports = makeCreateCustomer;
