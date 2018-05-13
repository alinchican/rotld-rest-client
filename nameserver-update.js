const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "nameserver-update";

// -d "nameserver=ns.test-28-09.ro" --data-urlencode "ips=10.10.10.10" https://rest2-test.rotld.ro:6080
const nameserverUpdate = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = nameserverUpdate;
