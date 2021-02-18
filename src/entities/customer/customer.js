const schema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    firstname: { type: ["string"], minLength: 2, maxLength: 32 },
    lastname: { type: ["string"], minLength: 2, maxLength: 32 },
    country: { type: "string", minLength: 2, maxLength: 32 },
    zip: { type: "string", pattern: '^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-zA-Z]{2}$' },
    city: { type: "string", minLength: 2, maxLength: 32 },
    street: { type: "string", minLength: 2, maxLength: 32 },
    houseNumber: { type: "string", minLength: 2, maxLength: 32 },
    state: {type: "string", enum: ['inactive', 'active'], default: 'inactive'}
  },
  required: ["email", "firstname", "lastname", "country", "zip", "city", "street", "houseNumber"],
  additionalProperties: false,
};

module.exports = ({ validateData }) => {
  return function makeCustomer(customer = {}) {

    // * used schema instead of nested if-else statements
    const errorMessage = validateData(schema, customer);
    if (errorMessage) {
      throw new Error(errorMessage);
    }

    return Object.freeze({
      getEmail: () => customer.email,
      getFirstName: () => customer.firstname,
      getLastName: () => customer.lastname,
      getCountry: () => customer.country,
      getZip: () => customer.zip,
      getCity: () => customer.city,
      getStreet: () => customer.street,
      getHouseNumber: () => customer.houseNumber,
      getState: () => customer.state,
      setActive: () => customer.state = "active",
      setInactive: () => customer.state = "inactive"
    });
  };
};