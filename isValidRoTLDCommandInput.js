const fs = require("fs");

const isValidRoTLDCommandInput = (commandName, input) => {
  if (typeof commandName !== "string") {
    throw new TypeError("Command name must be a string.");
  }

  const schemaFile = `./schema/command-${commandName}.schema.js`;

  if (!fs.existsSync(schemaFile)) {
    throw new TypeError("Command name not found.");
  }

  const schema = require(schemaFile);
  const validationResult = schema.validate(input);

  if (validationResult.error) {
    throw new Error(validationResult.error);
  }

  return true;
};

module.exports = isValidRoTLDCommandInput;
