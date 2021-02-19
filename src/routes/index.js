const { Router } = require("express");

const createCustomerRoute = require("./customer");
const createAuthRoute = require("./auth");

const router = Router();

function createRouter() {
  router.use("/customer", createCustomerRoute());
  router.use("/auth", createAuthRoute());
  // * router.use("/voucher", createVoucherRoute());

  router.use((request, response) => {
    response.sendStatus(404);
  });
  return router;
}

module.exports = createRouter;
