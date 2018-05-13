const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // nameserver [string:ascii][mandatory]
    nameserver: schemaValidator.string().required(),

    // ips[string:ascii] [mandatory]: A comma separated list of IPs. At least one valid IP is required. Maximum allowed
    // number of IPs is 2. IP version support:IPv4 and IPv6. E.g.: 196.102.12.1, 2001:db8::1428:57ab.
    ips: schemaValidator.string().required()
  });

module.exports = inputSchema;
