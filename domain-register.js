const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "domain-register";

// -d "domain=testing-registration.ro" --data-urlencode "c_registrant=C614082" --data-urlencode "domain_password=somepassword" --data-urlencode "domain_period=1" --data-urlencode "reservation=0" https://rest2-test.rotld.ro:6080
const domainRegister = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = domainRegister;
