const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "nameserver-info";

// -d "nameserver= ns.rnc.ro" https://rest2-test.rotld.ro:6080
const nameserverInfo = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = nameserverInfo;
