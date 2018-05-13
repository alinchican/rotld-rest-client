const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "domain-trade";

// -d "domain=testing-registration.ro" --data-urlencode "authorization_key=hp9BVumyMAb5qX2H" --data-urlencode "c_registrant=C1367389 " --data-urlencode "domain_period=1" https://rest2-test.rotld.ro:6080
const domainTrade = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = domainTrade;
