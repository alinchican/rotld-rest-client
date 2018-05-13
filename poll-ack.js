const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");

const commandName = "poll-ack";

// -d "message_id=msgbroker-5077" https://rest.rotld.ro:6080
const pollFetch = input =>
  new Promise(resolve => {
    isValidRoTLDCommandInput(commandName, input);
    resolve([commandName]);
  });

module.exports = pollFetch;
