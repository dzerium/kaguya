const { customerUseCases } = require("../../usecases");

const makeGetCustomer = require("./getCustomer");
const makeCreateCustomer = require("./createCustomer");

const { getCustomerUc, createCustomerUc } = customerUseCases;


// * Create the Controllers
const createCustomer = makeCreateCustomer({ createCustomerUc });
const getCustomer = makeGetCustomer({ getCustomerUc });


const customerController = Object.freeze({ getCustomer, createCustomer });

module.exports = customerController