const schema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    password: { type: ["string"], minLength: 8, maxLength: 32 },
    role: {
      type: ["string"],
      enum: ["customer", "admin"],
      default: "customer",
    },
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

    let encryptedPassword = await encrypt(auth.password);

    return Object.freeze({
      getEmail: () => auth.email,
      getEncryptedPassword: () => encryptedPassword,
      isPasswordMatched: async (encryptedPassword) =>
        await compare(auth.password, encryptedPassword),
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
