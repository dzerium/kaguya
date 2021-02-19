const Ajv = require("ajv").default;
const addFormats = require("ajv-formats");
const bcrypt = require("bcrypt");

const ajv = new Ajv({ allErrors: true, useDefaults: true, coerceTypes: true });
addFormats(ajv, ["email"]);

const SALT_ROUNDS = 10;

function validateData(schema, data) {
  const validate = ajv.compile(schema);
  const result = validate(data);

  if (!result) {
    return `${validate.errors[0].dataPath} ${validate.errors[0].message}`;
  } else {
    return null;
  }
}

async function encrypt(password) {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
}

async function compare(password, encryptedPassword) {
  const isMatched = await bcrypt.compare(password, encryptedPassword);
  return isMatched;
}

// * Entities
const buildMakeAuth = require("./auth");

// * Inject dependencies
const makeAuth = buildMakeAuth({ validateData, encrypt, compare });

module.exports = makeAuth;
