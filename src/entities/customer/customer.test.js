const makeCustomer = require("./index")

describe('customer', () => {
  const validCustomerInput = {
    "email": "dzerium@gmail.com",
    "firstname": "Edzer",
    "lastname": "Padilla",
    "country": "Philippines",
    "zip": "1230AA",
    "city": "Makati",
    "street": "S. Javier Street",
    "houseNumber": "Unit 404"
  }

  // * validation tests
  it('must have an email', () => {
    let testCustomerInput = { ...validCustomerInput }
    testCustomerInput.email = null
    expect(() => makeCustomer(testCustomerInput)).toThrow()
  })


  // * getters tests
  it('must get valid email', () => {
    const customer = makeCustomer(validCustomerInput)
    expect(customer.getEmail()).toBe('dzerium@gmail.com')
  })

  // * setters tests
})