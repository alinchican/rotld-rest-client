const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "domain-renew";

// -d "domain=testingrenew.ro" -d "domain_period=1" https://rest2-test.rotld.ro:6080
const domainRenew = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = domainRenew;
