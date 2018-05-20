const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // domain [string:ascii] [mandatory]: a .ro domain
    domain: schemaValidator
      .string()
      .required()
      .RoTLDDomain()
  });

module.exports = inputSchema;
