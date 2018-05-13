const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // domain [string:ascii] [mandatory]: a .ro domain
    domain: schemaValidator
      .string()
      .required()
      .RoTLDDomain(),

    // authorization_key [string:alphanum] [mandatory]:
    // the authorization key provided by the registrant
    authorization_key: schemaValidator
      .string()
      .required()
      .RoTLDAlphanum()
  });

module.exports = inputSchema;
