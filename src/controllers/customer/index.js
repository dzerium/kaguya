const { customerUseCases } = require("../../usecases");

const makeGetCustomer = require("./getCustomer");
const makeCreateCustomer = require("./createCustomer");

const { getCustomerUc, createCustomerUc } = customerUseCases;


// * Create the Constructors
const getCustomer = makeGetCustomer({ getCustomerUc });
const createCustomer = makeCreateCustomer({ createCustomerUc });

const customerController = Object.freeze({ getCustomer, createCustomer });

module.exports = customerController