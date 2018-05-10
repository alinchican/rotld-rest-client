const personTypes = require("./personTypes");
const isValidPersonType = require("./isValidPersonType");

const getPersonTypeName = personType => {
  if (!isValidPersonType(personType)) {
    throw new Error(
      `Person type is invalid. Must be one of ${Object.keys(personTypes).join(
        ", "
      )}.`
    );
  }

  return personTypes[personType];
};

module.exports = getPersonTypeName;
