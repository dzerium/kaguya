function makeGetProduct(getProductUc) {
  // * Get Product Controller
  return async function getProduct(httpRequest) {
    // * Request Variables
    const { name, frequency } = httpRequest.body;

    // * Response Variables
    const headers = { "Content-Type": "application/json" };
    let statusCode = 404;
    let body = null;

    try {
      body = await getProductUc({ name, frequency });
      if (body) {
        statusCode = 200;
      }
    } catch (error) {
      body = error.message;
      statusCode = 400;
    }

    return {
      headers,
      statusCode,
      body,
    };
  };
}

module.exports = makeGetProduct;
