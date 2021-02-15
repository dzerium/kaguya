const { Router } = require("express");

const requestAdapter = require("../adapters/createExpressAdapter");

const { productController } = require("../controllers");

const { getProduct } = productController;
const router = Router();

module.exports = () => {
  router.get("/", requestAdapter(getProduct));
  return router;
};
