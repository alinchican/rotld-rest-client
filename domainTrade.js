const isRoTLDDomain = require("rotld-toolbox/isRoTLDDomain");
// -d "domain=testing-registration.ro" --data-urlencode "authorization_key=hp9BVumyMAb5qX2H" --data-urlencode "c_registrant=C1367389 " --data-urlencode "domain_period=1" https://rest2-test.rotld.ro:6080

const domainTrade = domainName => {
  //   domain [string:ascii] [mandatory]:	a	.ro	domain
  // § authorization_key	[string:alphanum] [mandatory]:	the	authorization	key	provided	by	the	registrant.
  // § c_registrant [string] [mandatory]:	The	new	registrant	contact	ID	(a	registrant	must	be	created	before). The
  // registrant	contact	ID	must	be	unique	for	each	trade.
  // § domain_period [string]	[mandatory]:	a	number	between	1	and	10]	which	represents	the	number	of	years. A
  // year	has	365	days	and	it	does	not	account	the	leap	years.
  // § domain_password[string:ascii][optional]: If	not	present,	a	password	will	be	generated	by	the	system.	If	present,
  // the	password	must	have	max	length:	40	chars,	min.length:	5	chars.	Regexp:	r"^[a-z0-9\-
  // \.\,\:\;\[\]\{\}\_\+\=\@\#\$\^\*\?\!\|\~]{5,40}$",re.IGNORECASE
  if (!isRoTLDDomain(domainName)) {
    throw new Error(
      "Can't check availability for a domain name that doesn't contain a Romanian top level domain."
    );
  }

  const commandName = "domain-trade";

  return [commandName, domainName];
};

module.exports = domainTrade;
