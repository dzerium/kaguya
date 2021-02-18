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
  },
  required: ["email", "firstname", "lastname", "country", "zip", "city", "street", "houseNumber"],
  additionalProperties: false,
};

module.exports = ({ schemaValidator }) => {
  return function makeCustomer(input = {}) {

    const validate = schemaValidator.compile(schema);
    const result = validate(input);

    if (!result) {
      throw new Error(`${validate.errors[0].dataPath} ${validate.errors[0].message}`);
    }

    const { email, firstname, lastname, country, zip, city, street, houseNumber } = input

    return Object.freeze({
      getEmail: () => email,
      getFirstName: () => firstname,
      getLastName: () => lastname,
      getCountry: () => country,
      getZip: () => zip,
      getCity: () => city,
      getStreet: () => street,
      getHouseNumber: () => houseNumber
    });
  };
};