const schema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    password: { type: ["string"], minLength: 8, maxLength: 32 },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

module.exports = ({ validateData, encrypt, compare }) => {
  return async function makeAuth(auth) {
    // * used schema instead of nested if-else statements
    const errorMessage = validateData(schema, auth);
    if (errorMessage) {
      throw new Error(errorMessage);
    }

    return Object.freeze({
      getEmail: () => auth.email,
      isPasswordMatched: async (encryptedPassword) =>
        await compare(auth.password, encryptedPassword),
      getEncryptedPassword: async () => await encrypt(auth.password),
    });
  };
};
