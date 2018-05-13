const RoTLDCountryCodes = require("./RoTLDCountryCodes");

const isValidCountryCode = countryCode => {
  if (typeof countryCode !== "string") {
    throw new TypeError("Argument must be a string.");
  }

  if (!countryCode) {
    throw new TypeError("Can't decode an empty country code.");
  }

  if (!Object.keys(RoTLDCountryCodes).includes(countryCode)) {
    return false;
  }

  return true;
};

module.exports = isValidCountryCode;
