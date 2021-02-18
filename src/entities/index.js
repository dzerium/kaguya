const Ajv = require("ajv").default;
const addFormats = require("ajv-formats");

const schemaValidator = new Ajv({ allErrors: true, useDefaults: true, coerceTypes: true });
addFormats(schemaValidator, ["email"])


// * Entities
const buildMakeCustomer = require("./customer")

// * Inject dependencies
const makeCustomer = buildMakeCustomer({ schemaValidator });


module.exports = {
  makeCustomer
};