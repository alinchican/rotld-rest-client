const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "domain-info";

// -d "domain=rnc.ro" https://rest2-test.rotld.ro:6080
const domainInfo = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = domainInfo;
