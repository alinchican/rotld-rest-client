const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // domain [string]: a .ro domain [mandatory]
    domain: schemaValidator
      .string()
      .required()
      .RoTLDDomain(),

    // domain_period [mandatory] [a number between 1 and 10].
    domain_period: schemaValidator
      .number()
      .required()
      .min(1)
      .max(10)
  });

module.exports = inputSchema;
