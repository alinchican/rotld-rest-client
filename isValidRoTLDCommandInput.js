const schemaValidator = require("./schemaValidator");

const isValidRoTLDCommandInput = (commandName, input) => {
  if (typeof personType !== "string") {
    throw new TypeError("Argument must be a string.");
  }

  const schema = require(`./schema/${commandName}`);

  schemaValidator.assert(input, schema);

  return true;
};

module.exports = isValidRoTLDCommandInput;
