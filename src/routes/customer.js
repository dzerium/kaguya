const { Router } = require("express");

const requestAdapter = require("../adapters/createExpressAdapter");
const { customerController } = require("../controllers");

const { getCustomer, createCustomer } = customerController;
const router = Router();

module.exports = () => {
  router.get("/:email", requestAdapter(getCustomer));
  router.post("/", requestAdapter(createCustomer));
  return router;
};
