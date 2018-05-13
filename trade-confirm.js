const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "trade-confirm";

// -d "tid=44" https://rest2-test.rotld.ro:6080
const tradeConfirm = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = tradeConfirm;
