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
    const result = await auth.isPasswordMatched(existingAuth.password);
    if (!result) {
      throw new Error("Password did not matched");
    }

    const authToken = auth.getAuthToken();
    return authToken;
  };
}

module.exports = makeLoginAuth;
