const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // domain [string]: a valid .ro domain name [mandatory]
    domain: schemaValidator
      .string()
      .required()
      .RoTLDDomain()
  });

module.exports = inputSchema;
