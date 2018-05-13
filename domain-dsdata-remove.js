const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "domain-dsdata-remove";

// -d "domain= testingdsdata.ro" -d "keytag=12345" -d "alg=3" -d https://rest2-test.rotld.ro:6080
const domainDSdataRemove = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = domainDSdataRemove;
