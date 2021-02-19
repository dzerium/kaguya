const Ajv = require("ajv").default;
const addFormats = require("ajv-formats");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const ajv = new Ajv({ allErrors: true, useDefaults: true, coerceTypes: true });
addFormats(ajv, ["email"]);

const { AUTH_TOKEN_SECRET } = process.env;
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

function createAuthToken({ email, role, country = "NL" }) {
  const token = jwt.sign(
    {
      email,
      role,
      country,
    },
    AUTH_TOKEN_SECRET,
    { expiresIn: "7d" } // * 7 days session expiration
  );
  return token;
}

function validateAuthToken(authToken) {
  let decoded = jwt.verify(authToken, AUTH_TOKEN_SECRET);
  return decoded;
}

// * Entities
const buildMakeAuth = require("./auth");

// * Inject dependencies
const makeAuth = buildMakeAuth({
  validateData,
  encrypt,
  compare,
  createAuthToken,
  validateAuthToken,
});

module.exports = makeAuth;
