const schemaValidator = require("../schemaValidator");

const romanianInputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // cid [string]: registrant id [mandatory]
    cid: schemaValidator.string().required(),

    // person_type[string] [mandatory] : Pemited values: p|ap|nc|c|gi|pi|o
    person_type: schemaValidator
      .string()
      .required()
      .RoTLDPersonType(),

    // cnp_fiscal_code[string:utf-8] [mandatory]: An identification number for
    // persons (personal ID, passport number, driving license, etc),fiscal code
    // for companies or other unique identification number or sequence of
    // characters for juridical entities. Mandatory for Romanian entities.
    // Optional for foreigners. Max Length: 40 chars. Min. Length: 5 chars.
    cnp_fiscal_code: schemaValidator
      .string()
      .min(5, "utf8")
      .max(40, "utf8")
      .when("person_type", {
        is: schemaValidator.valid("p", "ap", "j", "c"),
        then: schemaValidator.required()
      }),

    // registration_number [string:utf-8] [optional]. Mandatory for Commercial
    // Romanian entities (where person_type is 'c'). Optional for foreigners
    // or other Romanian entities. Max Length: 40 chars.
    registration_number: schemaValidator
      .string()
      .max(40, "utf8")
      .when("person_type", {
        is: "c",
        then: schemaValidator.required()
      })
  });

const foreignInputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // cid [string]: registrant id [mandatory]
    cid: schemaValidator.string().required(),

    // person_type[string] [mandatory] : Pemited values: p|ap|nc|c|gi|pi|o
    person_type: schemaValidator
      .string()
      .required()
      .personType(),

    // cnp_fiscal_code[string:utf-8] [mandatory]:
    // An identification number for persons (personal ID, passport number,
    // driving license, etc),fiscal code for companies or other unique
    // identification number or sequence of characters for juridical entities.
    // Mandatory for Romanian entities.
    // Optional for foreigners.
    // Max Length: 40 chars. Min. Length: 5 chars.
    cnp_fiscal_code: schemaValidator
      .string()
      .min(5, "utf8")
      .max(40, "utf8"),

    // registration_number [string:utf-8] [optional].
    // Mandatory for Commercial Romanian entities (where person_type is 'c').
    // Optional for foreigners or other Romanian entities. Max Length: 40 chars.
    registration_number: schemaValidator.string().max(40, "utf8")
  });

exports.romanianInputSchema = romanianInputSchema;
exports.foreignInputSchema = foreignInputSchema;
