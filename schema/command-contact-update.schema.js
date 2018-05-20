const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator
  .object()
  .required()
  .keys({
    // cid [string]: registrant id [mandatory]
    cid: schemaValidator.string().required(),

    // address1 [string:utf-8] [mandatory]:
    // Max Length: 128 chars.
    // Min. Length: 1 char.
    address1: schemaValidator
      .string()
      .required()
      .min(1, "utf8")
      .max(128, "utf8"),

    // address2[string:utf-8] [optional]:
    // Max Length: 128 chars.
    // Min. Length: 1 char.
    address2: schemaValidator
      .string()
      .min(1, "utf8")
      .max(128, "utf8"),

    // address3[string:utf-8] [optional]:
    // Max Length: 128 chars.
    // Min. Length: 1 char.
    address3: schemaValidator
      .string()
      .min(1, "utf8")
      .max(128, "utf8"),

    // city[string:utf-8] [mandatory]:
    // Max Length: 40 chars.
    // Min. Length: 1 char.
    city: schemaValidator
      .string()
      .required()
      .min(1, "utf8")
      .max(40, "utf8"),

    // state_province[string:utf-8] [mandatory]:
    // Max Length: 40 chars.
    // Min. Length: 1 char.
    state_province: schemaValidator
      .string()
      .required()
      .min(1, "utf8")
      .max(40, "utf8"),

    // postal_code[string:utf-8] [optional]:
    // Max Length: 40 chars.
    // Min. Length: 1 char.
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
      .RoTLDCountryCode(),

    // phone [string:ascii] [mandatory]:
    // Mandatory format: +ccc.nnnnnnnnn (E.G. +40.727636787)
    // where ccc is the country code (http://countrycode.org/) and
    // nnnnnnnnn is the local number. Max Length: 20 chars.
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
      .max(128, "utf8")
  });

module.exports = inputSchema;
