const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "domain-reset-ns";

// -d "domain=testing-registration.ro" --data-urlencode "nameservers=ns.testing-registration.ro,ns2.testing-registration.ro" https://rest2-test.rotld.ro:6080
const domainResetNS = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = domainResetNS;
