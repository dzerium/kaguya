const { makeGetSubscription } = require("./subscription");

const { makeDb } = require("../data-access");
// Database interfaces
// const { subscriptionDb } = require("../data-access");
const subscriptionDb = () => {
  return function findById(id) {
    return { planId: "P-23B55241AT195681HSJKAKKQ" };
  };
};
makeDb();
// Create UC from factory
const getSubscriptionUC = makeGetSubscription({ subscriptionDb });

const subscriptionUseCases = Object.freeze({
  getSubscriptionUC,
});

module.exports = { subscriptionUseCases };
