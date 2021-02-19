function makeRegisterAuth({ authDb }) {
  // * Get Subscription Use-case
  return async function registerAuth({ authInfo }) {
    console.log(authInfo);
    return authInfo;
  };
}

module.exports = makeRegisterAuth;
