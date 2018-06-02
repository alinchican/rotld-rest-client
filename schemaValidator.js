const Joi = require("joi");
const getRoTLDWhoisDomainLabels = require("rotld-toolbox/getRoTLDWhoisDomainLabels");
const isValidRoTLDPersonType = require("./isValidRoTLDPersonType");
const isValidRoTLDInputCharacters = require("./isValidRoTLDInputCharacters");
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
    RoTLDDomainSubdomain:
      "needs to be a valid RoTLD domain (without subdomain)",
    RoTLDDomainsList: "needs to be a valid RoTLD domain list",
    RoTLDDomainsListSubdomains:
      "needs to be a valid RoTLD domain list (without subdomains)",
    RoTLDIpList: "needs to be a valid ip list",
    RoTLDNameserversList: "needs to be a valid nameserver list",
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
        if (!isValidRoTLDInputCharacters(value)) {
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
        const domainSchema = Joi.string().hostname();

        try {
          const isValidHDomain = domainSchema.validate(value);

          if (isValidHDomain.error) {
            return this.createError(
              "string.RoTLDDomain",
              { value: value },
              state,
              options
            );
          }

          const domainLabels = getRoTLDWhoisDomainLabels(value);

          if (domainLabels.subdomain) {
            return this.createError(
              "string.RoTLDDomainSubdomain",
              { value: value },
              state,
              options
            );
          }
        } catch (error) {
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
        const domainSchema = Joi.string().hostname();
        let isValidDomains = true;
        let isValidDomainsWithoutSubdomain = true;

        domainsList.forEach(domain => {
          try {
            const isValidHDomain = domainSchema.validate(domain);

            if (isValidHDomain.error) {
              isValidDomains = false;
            }
            const domainLabels = getRoTLDWhoisDomainLabels(domain);

            if (domainLabels.subdomain) {
              isValidDomainsWithoutSubdomain = false;
            }
          } catch (error) {
            isValidDomains = false;
          }
        });

        if (!isValidDomains) {
          return this.createError(
            "string.RoTLDDomainsList",
            { value: value },
            state,
            options
          );
        }

        if (!isValidDomainsWithoutSubdomain) {
          return this.createError(
            "string.RoTLDDomainsListSubdomain",
            { value: value },
            state,
            options
          );
        }

        return value;
      }
    },
    {
      name: "RoTLDIpList",
      validate(params, value, state, options) {
        const ipList = value.split(",");
        const ipSchema = Joi.string().ip();

        if (ipList.length < 1 || ipList.length > 2) {
          return this.createError(
            "string.RoTLDIpList",
            { value: value },
            state,
            options
          );
        }

        for (let ip of ipList) {
          const result = ipSchema.validate(ip);

          if (result.error) {
            return this.createError(
              "string.RoTLDIpList",
              { value: value },
              state,
              options
            );
          }
        }

        return value;
      }
    },
    {
      name: "RoTLDNameserversList",
      validate(params, value, state, options) {
        const nameserversList = value.split(",");
        const nameserverSchema = Joi.string().hostname();
        let isValidNameservers = true;

        if (nameserversList.length > 6) {
          return this.createError(
            "string.RoTLDNameserversListLength",
            { value: value },
            state,
            options
          );
        }

        nameserversList.forEach(domain => {
          const isValidHostname = nameserverSchema.validate(domain);

          if (isValidHostname.error) {
            isValidNameservers = false;
          }
        });

        if (!isValidNameservers) {
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
        const RoTLDAlphanumRegExp = "^[a-zA-Z0-9-]*$";

        if (!value.match(RoTLDAlphanumRegExp)) {
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
})).defaults(schema => {
  switch (schema.schemaType) {
    case "string":
      return schema.RoTLDValidInput();
    default:
      return schema;
  }
});

module.exports = schemaValidator;
