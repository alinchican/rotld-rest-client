const Joi = require("joi");
const isRoTLDDomain = require("rotld-toolbox/isRoTLDDomain");
const isValidRoTLDPersonType = require("./isValidRoTLDPersonType");
const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");
const isValidRoTLDCountryCode = require("./isValidRoTLDCountryCode");

const schemaValidator = Joi.extend(joi => ({
  base: joi.string(),
  name: "string",
  language: {
    RoTLDPasswordCharacters:
      "needs to respect RoTLD password characters requirement",
    RoTLDCountryCode: "needs to have a valid RoTLD phone number format",
    RoTLDValidInput: "needs to have valid RoTLD input characters",
    RoTLDDomain: "needs to be a valid RoTLD domain",
    RoTLDDomainsList: "needs to be a valid RoTLD domain list",
    RoTLDIpLIst: "needs to be a valid ip list",
    RoTLDNameserversList: "needs to be a valid nameserver list",
    RoTLDNameserver: "needs to be a valid nameserver",
    RoTLDAlphanum: "needs to be a valid RoTLD alphanum",
    RoTLDPersonType: "needs to be a valid RoTLD person type"
  },
  rules: [
    {
      name: "RoTLDPasswordCharacters",
      validate(params, value, state, options) {
        const oneLowercase = /[a-z]/;
        const oneUppercase = /[A-Z]/;
        const oneDigit = /\d/;
        const allowedCharacters = /^[a-zA-Z \d-.,:;[\]{}_+=@#$^*?!|~]*$/;

        if (
          !value.match(oneLowercase) ||
          !value.match(oneUppercase) ||
          !value.match(oneDigit) ||
          !value.match(allowedCharacters)
        ) {
          return this.createError(
            "string.RoTLDCountryCode",
            { value: value },
            state,
            options
          );
        }

        return value;
      }
    },
    {
      name: "RoTLDPhoneNumber",
      validate(params, value, state, options) {
        const PhoneNumberRegExp = "^\\+\\d{1,3}\\.\\d{7,14}$";

        if (value.length > 20 || !value.match(PhoneNumberRegExp)) {
          return this.createError(
            "string.RoTLDCountryCode",
            { value: value },
            state,
            options
          );
        }

        return value;
      }
    },
    {
      name: "RoTLDCountryCode",
      validate(params, value, state, options) {
        if (!isValidRoTLDCountryCode(value)) {
          return this.createError(
            "string.RoTLDCountryCode",
            { value: value },
            state,
            options
          );
        }

        return value;
      }
    },
    {
      name: "RoTLDValidInput",
      validate(params, value, state, options) {
        if (!isValidRoTLDCommandInput(value)) {
          return this.createError(
            "string.RoTLDValidInput",
            { value: value },
            state,
            options
          );
        }

        return value;
      }
    },
    {
      name: "RoTLDDomain",
      validate(params, value, state, options) {
        if (!isRoTLDDomain(value)) {
          return this.createError(
            "string.RoTLDDomain",
            { value: value },
            state,
            options
          );
        }

        return value;
      }
    },
    {
      name: "RoTLDDomainsList",
      validate(params, value, state, options) {
        const domainsList = value.split(",");

        // TODO: Add nameserver name validation

        if (domainsList.length > 6) {
          return this.createError(
            "string.RoTLDDomainsList",
            { value: value },
            state,
            options
          );
        }

        return value;
      }
    },
    {
      name: "RoTLDNameserversList",
      validate(params, value, state, options) {
        const domainsList = value.split(",");
        let isValid = true;

        domainsList.forEach(domain => {
          if (!isRoTLDDomain(domain)) {
            isValid = false;
          }
        });

        if (!isValid) {
          return this.createError(
            "string.RoTLDNameserversList",
            { value: value },
            state,
            options
          );
        }

        return value;
      }
    },
    {
      name: "RoTLDNameserver",
      validate(params, value, state, options) { // eslint-disable-line
        return value;
      }
    },
    {
      name: "RoTLDPersonType",
      validate(params, value, state, options) {
        if (!isValidRoTLDPersonType(value)) {
          return this.createError(
            "string.RoTLDPersonType",
            { value: value },
            state,
            options
          );
        }

        return value;
      }
    },
    {
      name: "RoTLDAlphanum",
      validate(params, value, state, options) {
        // TODO: Add alphanum with - check
        const isAlphaNum = true;

        if (!isAlphaNum) {
          return this.createError(
            "string.RoTLDAlphanum",
            { value: value },
            state,
            options
          );
        }

        return value;
      }
    }
  ]
}));

module.exports = schemaValidator;
