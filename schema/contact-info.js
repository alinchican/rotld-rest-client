const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // cid [string]: registrant id [mandatory]
    cid: schemaValidator.string().required()
  });

module.exports = inputSchema;
