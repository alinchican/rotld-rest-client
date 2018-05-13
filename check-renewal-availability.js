const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "check-renewal-availability";

// -d "domains_list=example.ro,example1.ro" –d "period=1" https://rest2-test.rotld.ro:6080
const checkRenewalAvailability = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = checkRenewalAvailability;
