function makeProduct({ makeDb }) {
  return Object.freeze({
    getProduct,
    // * createProduct,
  });

  // * Get product by name and frequency
  async function getProduct({ name, frequency }) {
    const db = await makeDb();
    const result = await db.query(
      "SELECT * FROM product WHERE name = $1 AND frequency = $2",
      [name, frequency]
    );
    if (result.rows.length === 0) return null;

    // * name and frequency: compound unique constraints
    return result.rows[0];
  }

  // * async function createProduct({ name, frequency, paypal_id, ecurring_id })
}

module.exports = makeProduct;
