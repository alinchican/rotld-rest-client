const isRoTLDDomain = require("rotld-toolbox/isRoTLDDomain");
// -d "domain=testing-registration.ro" --data-urlencode "c_registrant=C614082" --data-urlencode "domain_password=somepassword" --data-urlencode "domain_period=1" --data-urlencode "reservation=0" https://rest2-test.rotld.ro:6080

const domainRegister = domainName => {
  //   domain [string:ascii] [mandatory]:	a	.ro	domain
  // § reservation	[optional] [0|1			defaults	to	0].		If	“1”	the	domain	will	be	reserved,	if	“0”	or	not	present,	the	domain
  // will	be	registered.
  // § c_registrant [string] [mandatory]:	The	registrant	contact	ID	(a	registrant	must	be	created	before	registering	the
  // domain).
  // § domain_password[string:ascii][optional]:	If	not	present,	a	password	will	be	generated	by	the	system.	A	valid
  // password	must:
  // § have	minimum	6	characters;
  // § have	maximum	40	characters;
  // § have	at	least	one	uppercase	character;
  // § have	at	least	one	lowercase	character;
  // § have	at	least	one	digit;
  // § contain	the	characters:	[a-z	0-9-.,:;[]{}_+=@#$^*?!|~].
  // § domain_period [string]	[mandatory] [a	number	between	1	and	10]	which	represents	the	number	of	years. A
  // year	has	365	days	and	it	does	not	account	the	leap	years.
  if (!isRoTLDDomain(domainName)) {
    throw new Error(
      "Can't check availability for a domain name that doesn't contain a Romanian top level domain."
    );
  }

  const commandName = "domain-register";

  return [commandName, domainName];
};

module.exports = domainRegister;
