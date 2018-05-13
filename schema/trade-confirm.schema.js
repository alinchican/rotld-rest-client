const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // tid [integer] [mandatory]: a trade id
    tid: schemaValidator
      .number()
      .integer()
      .required()
  });

module.exports = inputSchema;
