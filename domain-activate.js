const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "domain-activate";

// -d "domain=testing-registration.ro" https://rest2-test.rotld.ro:6080
const domainActivate = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = domainActivate;
