function makeProduct({ makeDb }) {
  // * Get product by name and frequency
  async function getProduct({ name, frequency }) {
    const db = await makeDb();
    const result = db.query(
      "SELECT * FROM PRODUCT WHERE product = $1 AND frequency = $2",
      [product, frequency]
    );
    return result.rows;
  }

  return Object.freeze({ getProduct });
}

module.exports = makeProduct;
