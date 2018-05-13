const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "check-availability";

// -d "domain=justadomain4test.ro" https://rest2-test.rotld.ro:6080
const checkAvailability = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = checkAvailability;
