const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // domains_list [string] [mandatory]: list of domains separated by “,”
    domains_list: schemaValidator
      .string()
      .required()
      .RoTLDDomainsList(),

    // period [string] [mandatory]:
    // a number between 1 and 10] which represents the number of years.
    period: schemaValidator
      .number()
      .required()
      .min(1)
      .max(10)
  });

module.exports = inputSchema;
