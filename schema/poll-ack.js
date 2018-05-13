const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // message_id [alfanumeric] [mandatory]:  the message id is to be obtained from fetching the message using the
    // poll-fetch command
    message_id: schemaValidator
      .string()
      .required()
      .RoTLDAlphanum()
  });

module.exports = inputSchema;
