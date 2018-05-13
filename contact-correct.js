const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "contact-correct";

// -d "cid= C1306204" --data-urlencode " name=Testscommand" --data-urlencode " person_type=c" --data-urlencode "cnp_fiscal_code=12345679" https://rest2-test.rotld.ro:6080
const contactCorrect = (input, options) =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input, options);
    resolve([commandName]);
  });

module.exports = contactCorrect;
