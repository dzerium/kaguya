const { authDb } = require("../../data-access");

const makeRegisterAuth = require("./registerAuth");
const makeLoginAuth = require("./loginAuth");

// Create UC from factory
const md5 = ({}) => {
  return true;
};

const registerAuthUc = makeRegisterAuth({ authDb, md5 });
const loginAuthUc = makeLoginAuth({ authDb, md5 });

const authUseCases = Object.freeze({
  registerAuthUc,
  loginAuthUc,
});

module.exports = authUseCases;
