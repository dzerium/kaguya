const { makeCustomer } = require("../../entities");

function makeCreateCustomer({ customerDb, validateAddress }) {
  // * Get Subscription Use-case
  return async function getCustomerById(customerInfo) {
    const customer = makeCustomer(customerInfo)

    const existingCustomer = customerDb.findCustomerByEmail({ email: customer.getEmail()})

    if (existingCustomer && existingCustomer.length > 0) {
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
        billingAddress: {
          country: customer.getCountry(),
          zip: customer.getZip(),
          city: customer.getCity(),
          street: customer.getStreet(),
          houseNumber: customer.getHouseNumber()
        }
      }
    )

    return customerInfo;
  };
}

module.exports = makeCreateCustomer;
