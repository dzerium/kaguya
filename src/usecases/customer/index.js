const { customerDb, addressDb } = require("../../data-access");

const makeGetCustomer = require("./getCustomer");
const makeCreateCustomer = require("./getCustomer");

// Create UC from factory
const createCustomerUc = makeCreateCustomer({ customerDb, addressDb });
const getCustomerUc = makeCreateCustomer({ customerDb });


const customerUseCases = Object.freeze({
  createCustomerUc,
  getCustomerUc
});


module.exports = customerUseCases
