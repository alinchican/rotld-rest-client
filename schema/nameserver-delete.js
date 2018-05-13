const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // nameserver [string:ascii][mandatory]
    nameserver: schemaValidator.string().required()
  });

module.exports = inputSchema;
