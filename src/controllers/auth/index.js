const { authUseCases } = require("../../usecases");

const makeRegisterAuth = require("./registerAuth");
const makeLoginAuth = require("./loginAuth");

const { registerAuthUc, loginAuthUc } = authUseCases;

// * Create the Controllers
const registerAuth = makeRegisterAuth({ registerAuthUc });
const loginAuth = makeLoginAuth({ loginAuthUc });

const authController = Object.freeze({ registerAuth, loginAuth });

module.exports = authController;
