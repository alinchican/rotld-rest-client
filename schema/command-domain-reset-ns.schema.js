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

    // nameservers [string:ascii] [mandatory]:
    // A comma separated list of nameservers.
    // Maximum allowed number of nameservers is 6.
    // If nameservers parameter is empty, the current nameservers
    // of the domain will be deleted, thus
    // the domain will have no nameservers declared.
    nameservers: schemaValidator
      .string()
      .required()
      .allow("")
      .RoTLDNameserversList()
  });

module.exports = inputSchema;
