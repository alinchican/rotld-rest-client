const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "nameserver-delete";

// -d "format=json" -d "nameserver=ns.test-28-09.ro" https://rest2-test.rotld.ro:6080
const nameserverDelete = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = nameserverDelete;
