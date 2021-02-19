const schema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    password: { type: ["string"], minLength: 8, maxLength: 32 },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

module.exports = ({
  validateData,
  encrypt,
  compare,
  createAuthToken,
  validateAuthToken,
}) => {
  return async function makeAuth(auth) {
    // * used schema instead of nested if-else statements
    const errorMessage = validateData(schema, auth);
    if (errorMessage) {
      throw new Error(errorMessage);
    }

    let role = "customer";

    return Object.freeze({
      getEmail: () => auth.email,
      getEncryptedPassword: async () => await encrypt(auth.password),
      isPasswordMatched: async (encryptedPassword) =>
        await compare(auth.password, encryptedPassword),
      setAdmin: () => (role = "admin"),
      setCustomerRole: () => (role = "customer"),
      getRole: () => role,
      // * JWT token
      getAuthToken: () =>
        createAuthToken({
          email: auth.email,
          role,
        }),
      isAuthTokenValid: (authToken) => validateAuthToken(authToken),
    });
  };
};
