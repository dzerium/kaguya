const { makeGetSubscription } = require("./subscription");
const { makeGetProduct } = require("./product");

const { productDb } = require("../data-access");
// Database interfaces
// const { subscriptionDb } = require("../data-access");
const subscriptionDb = () => {
  return function findById(id) {
    return { planId: "P-23B55241AT195681HSJKAKKQ" };
  };
};

// Create UC from factory
const getSubscriptionUC = makeGetSubscription({ productDb, subscriptionDb });
const getProductUc = makeGetProduct({ productDb });

const subscriptionUseCases = Object.freeze({
  getSubscriptionUC,
});

const productUseCases = Object.freeze({
  getProductUc,
});

module.exports = { subscriptionUseCases, productUseCases };
