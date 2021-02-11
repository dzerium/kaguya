const { makeGetSubscription } = require("./subscription");

// Database interfaces
// const { subscriptionDb } = require("../data-access");
const subscriptionDb = () => {
  return function findById(id) {
    return {};
  };
};

// Create UC from factory
const getSubscriptionUC = makeGetSubscription({ subscriptionDb });

const subscriptionUseCases = Object.freeze({
  getSubscriptionUC,
});

module.exports = { subscriptionUseCases };
