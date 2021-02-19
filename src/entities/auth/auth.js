const schema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    password: { type: ["string"], minLength: 8, maxLength: 32 },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

module.exports = ({ validateData, encrypt }) => {
  return async function makeAuth(auth) {
    // * used schema instead of nested if-else statements
    const errorMessage = validateData(schema, auth);
    if (errorMessage) {
      throw new Error(errorMessage);
    }

    const encryptedPassword = await encrypt(auth.password);

    return Object.freeze({
      getEmail: () => auth.email,
      getEncryptedPassword: () => encryptedPassword,
    });
  };
};
