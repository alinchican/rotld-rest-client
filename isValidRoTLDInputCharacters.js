const regenerate = require("regenerate");

/*
  RoTLD permitted characters for REST & EPP input
  https://documentatie.rotld.ro/wp-content/uploads/Permitted-unicode-characters-table.pdf
  Version 3/5/2012
*/

var charactersPermitted = regenerate()
  .addRange(0x0020, 0x007e)
  .addRange(0x00a0, 0x00ff)
  .addRange(0x0100, 0x012b)
  .addRange(0x012e, 0x0131)
  .addRange(0x0134, 0x013e)
  .addRange(0x0141, 0x0148)
  .addRange(0x014a, 0x014d)
  .addRange(0x0150, 0x0173)
  .addRange(0x0178, 0x017e)
  .addRange(0x0218, 0x021b);

const isValidRoTLDInputCharacters = string => {
  if (typeof string !== "string") {
    throw new TypeError("Argument must be a string.");
  }

  const stringCharacters = Array.from(string);
  const stringUniqueCharacters = Array.from(new Set(stringCharacters));

  let isValid = true;

  stringUniqueCharacters.forEach(character => {
    if (!charactersPermitted.contains(character)) {
      isValid = false;
    }
  });

  return isValid;
};

module.exports = isValidRoTLDInputCharacters;
