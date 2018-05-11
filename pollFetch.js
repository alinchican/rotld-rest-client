// -d "include_counter=1" https://rest.rotld.ro:6080

const pollFetch = includeCounter => {
  // include_counter[integer] [optional]:	 the	only	possible	value	is	“1”	which	will	return	the	number	of	messages
  // left	on	the	server	and	not	counting	the	message	already	returned.

  const commandName = "poll-fetch";

  return [commandName, includeCounter];
};

module.exports = pollFetch;
