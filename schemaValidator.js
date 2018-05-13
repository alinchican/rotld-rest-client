const Joi = require("joi");
const isRoTLDDomain = require("rotld-toolbox/isRoTLDDomain");
const isValidRoTLDPersonType = require("./isValidRoTLDPersonType");
const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");
const isValidRoTLDCountryCode = require("./isValidRoTLDCountryCode");

const schemaValidator = Joi.extend(joi => ({
  base: joi.string(),
  name: "string",
  language: {
    RoTLDCountryCode: "needs to have an allowed RoTLD country code",
    RoTLDValidInput: "needs to have valid RoTLD input characters",
    RoTLDDomain: "needs to be a valid RoTLD domain",
    RoTLDDomainsList: "needs to be a valid RoTLD domain list",
    RoTLDNameserversList: "needs to be a valid nameserver list",
    RoTLDAlphanum: "needs to be a valid RoTLD alphanum",
    RoTLDPersonType: "needs to be a valid person type"
  },
  rules: [
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
