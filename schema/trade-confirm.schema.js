const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // tid [integer] [mandatory]: a trade id
    tid: schemaValidator.number().required()
  });

module.exports = inputSchema;
