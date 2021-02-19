const { makeAuth } = require("../../entities");

function makeLoginAuth({ authDb }) {
  // * Login Authentication Use Case
  return async function loginAuth(authInfo) {
    const auth = await makeAuth(authInfo);

    // * Authentication email is already existing
    const matched = await authDb.matchCredentials({
      email: auth.getEmail(),
      password: auth.getEncryptedPassword(),
    });

    if (!matched) {
      throw new Error("Wrong credentials provided");
    }

    return matched;
  };
}

module.exports = makeLoginAuth;
