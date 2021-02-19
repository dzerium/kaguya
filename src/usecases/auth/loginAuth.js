const { makeAuth } = require("../../entities");

function makeLoginAuth({ authDb }) {
  // * Login Authentication Use Case
  return async function loginAuth(authInfo) {
    const auth = await makeAuth(authInfo);

    // * Authentication email is already existing
    const existingAuth = await authDb.findAuthByEmail({
      email: auth.getEmail(),
    });

    if (!existingAuth) {
      throw new Error("No matching email found");
    }

    // * Check if passwords will match
    const result = auth.isPasswordMatched(existingAuth.password);

    return result;
  };
}

module.exports = makeLoginAuth;
