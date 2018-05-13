const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "trade-info";

// -d "tid=44" https://rest2-test.rotld.ro:6080
const tradeInfo = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = tradeInfo;
