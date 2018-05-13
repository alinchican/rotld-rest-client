const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // name [string:utf-8] [mandatory]: the name of the person
    // or the company who holds the right of use for the domain name.
    // Max Length: 128 chars. Min. Length: 2 chars.
    name: schemaValidator
      .string()
      .required()
      .min(2, "utf8")
      .max(128, "utf8"),

    // address1 [string:utf-8] [mandatory]:
    // Max Length: 128 chars. Min. Length: 1 char.
    address: schemaValidator
      .string()
      .required()
      .min(1, "utf8")
      .max(128, "utf8"),

    // address2[string:utf-8] [optional]:
    // Max Length: 128 chars. Min. Length: 1 char.
    address2: schemaValidator
      .string()
      .min(1, "utf8")
      .max(128, "utf8"),

    // address3[string:utf-8] [optional]:
    // Max Length: 128 chars. Min. Length: 1 char.
    address3: schemaValidator
      .string()
      .min(1, "utf8")
      .max(128, "utf8"),

    // city[string:utf-8] [mandatory]:
    // Max Length: 40 chars. Min. Length: 1 char.
    city: schemaValidator
      .string()
      .required()
      .min(1, "utf8")
      .max(40, "utf8"),

    // state_province[string:utf-8] [mandatory]:
    // Max Length: 40 chars. Min. Length: 1 char.
    state_province: schemaValidator
      .string()
      .required()
      .min(1, "utf8")
      .max(40, "utf8"),

    // postal_code[string:utf-8] [optional]:
    // Max Length: 40 chars. Min. Length: 1 char.
    postal_code: schemaValidator
      .string()
      .min(1, "utf8")
      .max(40, "utf8"),

    // country_code[mandatory]: 2 chars country code
    // according to ISO 3166-1-alpha-2
    // http://dev.rotld.ro/documents/iso-3166-2-code-countries-list
    country_code: schemaValidator
      .string()
      .required()
      .RoTLDCountryCode()
      .length(2, "utf8"),

    // phone [string:ascii] [mandatory]:
    // Mandatory format: +ccc.nnnnnnnnn (E.G. +40.727636787)
    // where ccc is the country code (http://countrycode.org/)
    // and nnnnnnnnn is the local number. Max Length: 20 chars.
    phone: schemaValidator
      .string()
      .required()
      .RoTLDPhoneNumber(),

    // fax[string:ascii] [optional]:
    // Mandatory format: same as the phone number format.
    // Max Length: 20 chars.
    fax: schemaValidator
      .string()
      .required()
      .RoTLDPhoneNumber(),

    // email[string:ascii] ] [mandatory] : Max Length: 128 chars.
    email: schemaValidator
      .string()
      .required()
      .email()
      .max(128, "utf8"),

    // person_type[string] [mandatory] : Pemited values: p|ap|nc|c|gi|pi|o
    person_type: schemaValidator
      .string()
      .required()
      .personType(),

    // cnp_fiscal_code[string:utf-8] [mandatory]: An identification number for
    // pesons (personl ID, passport number, driving license, etc),
    // fiscal code for companies or other unique identification
    // number or sequence of characters for juridical entities.
    // Mandatory for Romanian entities.
    // Optional for foreigners.
    // Max Length: 40 chars. Min. Length: 5 chars.
    cnp_fiscal_code: schemaValidator
      .string()
      .min(5, "utf8")
      .max(40, "utf8")
      .when("country_code", {
        is: "RO",
        then: schemaValidator.required()
      }),

    // registration_number [string:utf-8] [optional].
    // Mandatory for Commercial Romanian entities (where person_type is 'c').
    // Optional for foreigners or other Romanian entities.
    // Max Length: 40 chars.
    registration_number: schemaValidator
      .string()
      .max(40, "utf8")
      .when("person_type", {
        is: "c",
        then: schemaValidator.required()
      })
  });

module.exports = inputSchema;
