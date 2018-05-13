const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "contact-create";

// --data-urlencode "name=Radu Boncea" --dataurlencode "address1=Strada 9 Mai Nr.6" --data-urlencode "address2=Bl.1, Sc.1, Ap.1, Et.1" --data-urlencode "city=Bucuresti" --dataurlencode "state_province=Sector 6" --data-urlencode "phone=+40.7263888" --data-urlencode "email=radu@rotld.ro" --dataurlencode "country_code=RO" --data-urlencode "person_type=p" --data-urlencode "cnp_fiscal_code=19999999999999" https://rest2-test.rotld.ro:6080
const contactCreate = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = contactCreate;
