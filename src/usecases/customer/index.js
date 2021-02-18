const { customerDb } = require("../../data-access");

const makeCreateCustomer = require("./createCustomer");
const makeGetCustomer = require("./getCustomer");


// Create UC from factory
const validateAddress = ({}) => {return true}

const createCustomerUc = makeCreateCustomer({ customerDb, validateAddress });
const getCustomerUc = makeGetCustomer({ customerDb });


const customerUseCases = Object.freeze({
  createCustomerUc,
  getCustomerUc
});


module.exports = customerUseCases
