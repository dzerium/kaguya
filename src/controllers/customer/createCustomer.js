function makeCreateCustomer(creacteCustomerUc) {
  // * Create Customer Controller
  return async function createCustomer(httpRequest) {
    const headers = { "Content-Type": "application/json" };
    let statusCode = 200;
    let body = { error: "Id not found" };


    const {
      email, firstname, lastname, birthday,
      country, zip, city, street, number
    } = httpRequest.body

    creacteCustomerUc(
      {email, firstname, lastname, birthday, country, zip, city, street, number});

    return {
      headers,
      statusCode,
      body,
    };
  };
}

module.exports = makeCreateCustomer;
