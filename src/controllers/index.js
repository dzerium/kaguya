const { subscriptionUseCases } = require("../usecases");

const { getSubscriptionUC } = subscriptionUseCases;

const { createGetSubscription } = require("./subscription");

// * Constructors
const getSubscription = createGetSubscription(getSubscriptionUC);

const subscriptionController = Object.freeze({ getSubscription });

module.exports = { subscriptionController };
