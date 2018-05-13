const RoTLDPersonTypes = require("./RoTLDPersonTypes");

const isValidRoTLDPersonType = personType => {
  if (typeof personType !== "string") {
    throw new TypeError("Argument must be a string.");
  }

  if (!personType) {
    throw new TypeError("Can't decode an empty person type.");
  }

  if (!Object.keys(RoTLDPersonTypes).includes(personType)) {
    return false;
  }

  return true;
};

module.exports = isValidRoTLDPersonType;
