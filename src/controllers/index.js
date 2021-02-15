const { subscriptionUseCases, productUseCases } = require("../usecases");

const { getSubscriptionUC } = subscriptionUseCases;
const { getProductUc } = productUseCases;

const { makeGetSubscription } = require("./subscription");
const { makeGetProduct } = require("./product");

// * Constructors
const getProduct = makeGetProduct(getProductUc);
const getSubscription = makeGetSubscription(getSubscriptionUC);

const subscriptionController = Object.freeze({ getSubscription });
const productController = Object.freeze({ getProduct });

module.exports = { subscriptionController, productController };
