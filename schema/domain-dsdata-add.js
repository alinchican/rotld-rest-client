const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // domain [string]: a registered .ro domain [mandatory]
    domain: schemaValidator
      .string()
      .required()
      .RoTLDDomain(),

    // keytag [numeric][mandatory]: has values between 0 si 65535
    keytag: schemaValidator
      .number()
      .required()
      .min(0)
      .max(65535),

    // alg [numeric][mandatory]: the permitted values are [3, 5, 6, 7, 8, 10, 12, 13, 14].
    alg: schemaValidator
      .number()
      .required()
      .valid([3, 5, 6, 7, 8, 10, 12, 13, 14]),

    // digest_type [numeric][mandatory]: the permitted values are [1,2]
    digest_type: schemaValidator
      .number()
      .required()
      .valid([1, 2]),

    // digest [string] [mandatory]:  has only hexadecimal characters. The length and is 40 characters (20 bytes) for
    // digest_type = 1 or 64 characters (32 bytes) for digest_type = 2. NOTE: The length of the digest is calculated after
    // trimming. The hash is saved in the database, in a validated form(trimmed).
    digest: schemaValidator
      .string()
      .required()
      .hex()
      .trim()
      .when("digest_type", {
        is: "1",
        then: schemaValidator.length(40)
      })
      .when("digest_type", {
        is: "2",
        then: schemaValidator.length(64)
      })
  });

module.exports = inputSchema;
