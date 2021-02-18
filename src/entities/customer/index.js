const Ajv = require("ajv").default;
const addFormats = require("ajv-formats");

const ajv = new Ajv({ allErrors: true, useDefaults: true, coerceTypes: true });
addFormats(ajv, ["email"])

function validateData(schema, data) {
  const validate = ajv.compile(schema)
  const result = validate(data)

  if (!result) {
    return `${validate.errors[0].dataPath} ${validate.errors[0].message}`
  } else {
    return null
  }
}


// * Entities
const buildMakeCustomer = require("./customer")

// * Inject dependencies
const makeCustomer = buildMakeCustomer({ validateData });


module.exports = makeCustomer