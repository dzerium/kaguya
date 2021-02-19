const { makeAuth } = require("../../entities");

function makeRegisterAuth({ authDb }) {
  // * Register Credential Use Case
  return async function registerAuth(authInfo) {
    const auth = await makeAuth(authInfo);

    // * Authentication email is already existin
    const existingAuth = await authDb.findAuthByEmail({
      email: auth.getEmail(),
    });

    if (existingAuth) {
      return existingAuth;
    }

    const result = authDb.registerAuth({
      email: auth.getEmail(),
      password: auth.getEncryptedPassword(),
    });

    return result;
  };
}

module.exports = makeRegisterAuth;
