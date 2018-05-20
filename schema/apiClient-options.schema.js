const schemaValidator = require("../schemaValidator");
const clientConfig = require("../apiClient.config");

const inputSchema = schemaValidator
  .object()
  .required()
  .keys({
    username: schemaValidator.string().required(),
    password: schemaValidator.string().required(),
    environment: schemaValidator
      .string()
      .required()
      .valid(Object.keys(clientConfig.apiURLs)),
    allowUnsecure: schemaValidator.string().valid(true, false),
    localValidation: schemaValidator.string().valid(true, false),
    format: schemaValidator.string().valid("json", "xml"),
    language: schemaValidator.string().valid("en", "ro")
  });

module.exports = inputSchema;
