const { Router } = require("express");

const createCustomerRoute = require("./customer");

const router = Router();

function createRouter () {
  router.use("/customer", createCustomerRoute());

  // * router.use("/voucher", createVoucherRoute());
  // * router.use("/voucher", createVoucherRoute());

  router.use((request, response) => {
    response.sendStatus(404);
  });
  return router;
};

module.exports = createRouter