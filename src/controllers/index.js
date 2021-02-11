const { subscriptionUseCases } = require("../usecases");

const { getSubscriptionUC } = subscriptionUseCases;

const { makeGetSubscription } = require("./subscription");

// * Constructors
const getSubscription = makeGetSubscription(getSubscriptionUC);

const subscriptionController = Object.freeze({ getSubscription });

module.exports = { subscriptionController };
