const schema = require("./schema/apiClient-options.schema");
const Joi = require("joi");

const isValidClientOptions = input => {
  Joi.assert(input, schema);

  return true;
};

module.exports = isValidClientOptions;
