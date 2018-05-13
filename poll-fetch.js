const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "poll-fetch";

// -d "include_counter=1" https://rest.rotld.ro:6080
const pollFetch = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = pollFetch;
