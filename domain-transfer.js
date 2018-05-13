const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "domain-transfer";

// -d "domain=testing-registration.ro" --data-urlencode "authorization_key=BPKerUnZM7vhy2A" https://rest2-test.rotld.ro:6080
const domainTransfer = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = domainTransfer;
