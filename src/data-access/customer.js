function makeCustomer({ makeDb }) {
  return Object.freeze({
    getCustomerById,
    createCustomer
  });

  // * Get product by name and frequency
  async function getCustomerById({ id }) {
    const db = await makeDb();
    const result = await db.query(
      "SELECT * FROM customer WHERE id = $1",
      [id]
    );
    if (result.rows.length === 0) return null;

    return result.rows[0];
  }

  async function createCustomer({ email, firstname, lastname, birthday }, billingAddressId) {
    const db = await makeDb();
    const result = await db.query(
      `INSERT INTO
        customer (email, firstname, lastname, birthday, billingAddressId)
        VALUES ($1, $2, $3, $4, $5)`,
      [email, firstname, lastname, birthday, billingAddressId]
    )
    console.log(result)
    return result.rows[0]
  }
}

module.exports = makeCustomer;
