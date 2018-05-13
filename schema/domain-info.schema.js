const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // domain [string]: a .ro valid domain name [mandatory]
    domain: schemaValidator
      .string()
      .required()
      .RoTLDDomain()
  });

module.exports = inputSchema;
