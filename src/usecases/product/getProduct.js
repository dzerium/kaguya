function makeGetProduct({ productDb }) {
  // * Get Subscription Use-case
  return async function getProduct({ name, frequency } = {}) {
    if (!name || !frequency) {
      throw new Error("Name and Frequency must be supplied");
    }

    const product = await productDb.getProduct({ name, frequency });

    return product;
  };
}

module.exports = makeGetProduct;
