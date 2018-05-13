const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "contact-update";

// -d "cid=C609899" --data-urlencode "address1=Strada9 Mai Nr.6" --data-urlencode "address2=Bl.1, Sc.1, Ap.1, Et.1" --data-urlencode "city=Bucuresti" --data-urlencode "state_province=Sector 6" --data-urlencode "phone=+40.7263888" --data-urlencode "email=radu@rotld.ro" --data-urlencode "country_code=RO" https://rest2-test.rotld.ro:6080
const contactUpdate = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = contactUpdate;
