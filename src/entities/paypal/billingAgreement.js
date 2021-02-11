const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    description: { type: 'string' },
    startDate: {
      'type': 'object',
      'format': 'date-time'
    },
    plan: {
      type: 'object',
      properties: {
        id: { type: 'string' }
      }
    },
    payer: {
      type: 'object',
      properties: {
        payment_method: 'paypal'
      }
    },
    override_merchant_preferences: {
      type: 'object',
      properties: {
        return_url: { type: 'string', format: 'url'}
      }
    }
  },
  required: ['name', 'description', 'startDate', 'plan'],
  additionalProperties: false,
};

module.exports = ({ ajv, sanitize }) => {
  return function makeBillingAgreement(input = {}) {
    const validate = ajv.compile(schema);
    const result = validate(input);

    if (!result) {
      for (const error of validate.errors) {
        logger.info(`[${name}] ${error.dataPath} ${error.message}`)
      }
      return null
    }
    const { name, description, startDate, plan, payer, override_merchant_preferences } = input

    return Object.freeze({
      getBillingAgreementAttributes: () => {
        return {
          name,
          description,
          startDate,
          plan,
          payer,
          override_merchant_preferences
        }
      },
    });
  };
};