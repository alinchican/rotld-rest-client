const RoTLDPersonTypes = require("./RoTLDPersonTypes");
const isValidRoTLDPersonType = require("./isValidRoTLDPersonType");

const getRoTLDPersonTypeName = personType => {
  if (!isValidRoTLDPersonType(personType)) {
    throw new Error(
      `Person type is invalid. Must be one of ${Object.keys(
        RoTLDPersonTypes
      ).join(", ")}.`
    );
  }

  return RoTLDPersonTypes[personType];
};

module.exports = getRoTLDPersonTypeName;
