const { Router } = require("express");

const requestAdapter = require("../adapters/createExpressAdapter");
const { authController } = require("../controllers");

const { registerAuth, loginAuth } = authController;
const router = Router();

module.exports = () => {
  router.post("/register", requestAdapter(registerAuth));
  router.post("/login", requestAdapter(loginAuth));
  return router;
};
