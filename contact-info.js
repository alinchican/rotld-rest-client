const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "contact-info";

// -d "cid=C538089" https://rest2-test.rotld.ro:6080
const contactInfo = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = contactInfo;
