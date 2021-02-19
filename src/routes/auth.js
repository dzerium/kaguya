const { Router } = require("express");

const requestAdapter = require("../adapters/createExpressAdapter");
const { authController } = require("../controllers");

const { registerAuth } = authController;
const router = Router();

module.exports = () => {
  router.post("/", requestAdapter(registerAuth));
  return router;
};
