const { userDb } = require("../../data-access");

const makeRegisterAuth = require("./registerAuth");

// Create UC from factory
const md5 = ({}) => {
  return true;
};

const registerAuthUc = makeRegisterAuth({ userDb, md5 });

const authUseCases = Object.freeze({
  registerAuthUc,
});

module.exports = authUseCases;
