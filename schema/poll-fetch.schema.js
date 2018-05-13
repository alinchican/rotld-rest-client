const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // include_counter[integer] [optional]:
    // the only possible value is “1” which will return the number of messages
    // left on the server and not counting the message already returned
    include_counter: schemaValidator
      .number()
      .integer()
      .valid(1)
  });

module.exports = inputSchema;
