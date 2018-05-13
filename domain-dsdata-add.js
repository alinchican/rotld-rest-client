const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "domain-dsdata-add";

// -d "domain= testingdsdata.ro" -d "keytag=12345" -d "alg=3" -d "digest_type=1" -d "digest=D524641568295383535BB836401BB8B836401BB8" https://rest2-test.rotld.ro:6080
const domainDSdataAdd = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = domainDSdataAdd;
