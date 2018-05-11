// -d "message_id=msgbroker-5077" https://rest.rotld.ro:6080

const pollAck = messageId => {
  // message_id	[alfanumeric] [mandatory]:		the	message	id	is	to	be	obtained	from	fetching	the	message	using	the
  // poll-fetch	command

  const commandName = "poll-ack";

  return [commandName, messageId];
};

module.exports = pollAck;
