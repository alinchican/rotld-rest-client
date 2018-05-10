const personTypes = require("./personTypes");

const isValidPersonType = personType => {
  if (typeof personType !== "string") {
    throw new TypeError("Argument must be a string.");
  }

  if (!personType) {
    throw new TypeError("Can't decode an empty person type.");
  }

  if (!Object.keys(personTypes).includes(personType)) {
    return false;
  }

  return true;
};

module.exports = isValidPersonType;
