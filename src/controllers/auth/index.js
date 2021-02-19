const { authUseCases } = require("../../usecases");

const makeRegisterAuth = require("./registerAuth");

const { registerAuthUc } = authUseCases;

// * Create the Controllers
const registerAuth = makeRegisterAuth({ registerAuthUc });

const authController = Object.freeze({ registerAuth });

module.exports = authController;
