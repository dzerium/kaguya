const { Router } = require("express");

const createSubscriptionRoute = require("./subscription");

const router = Router();

module.exports = () => {
  router.use("/subscription", createSubscriptionRoute());

  // * router.use("/customer", createCustomerRoute());
  // * router.use("/voucher", createVoucherRoute());

  router.use((request, response) => {
    console.log(request);
    response.sendStatus(404);
  });
  return router;
};
