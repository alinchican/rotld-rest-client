const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "check-balance";

// "command=check-balance" https://rest2-test.rotld.ro:6080
const checkBalance = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = checkBalance;
