const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "nameserver-create";

// -d "nameserver=ns.test-28-09.ro" --data-urlencode "ips=196.102.12.1, 2001:db8::1428:57ab" https://rest2-test.rotld.ro:6080
const nameserverCreate = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = nameserverCreate;
