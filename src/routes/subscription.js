const { Router } = require("express");

const requestAdapter = require("../adapters/createExpressAdapter");

const { subscriptionController } = require("../controllers");

const { getSubscription } = subscriptionController;
const router = Router();

module.exports = () => {
  router.get("/", requestAdapter(getSubscription));
  return router;
};
