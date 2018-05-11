const isRoTLDDomain = require("rotld-toolbox/isRoTLDDomain");
// -d "domain=testingrenew.ro" -d "domain_period=1" https://rest2-test.rotld.ro:6080

const domainRegister = domainName => {
  //   domain [string]:	a	.ro	domain	[mandatory]
  // § domain_period [mandatory] [a	number	between	1	and	10].		The	domain_period	will	be	added	to	the	current
  // domain	expiration	date.	The	new	domain	expiration	date	should	not	exceed	10	years	from	the	moment	of
  // issuing	the	command.	A	year	has 365	days and	it	does	not	account	the	leap	years.
  if (!isRoTLDDomain(domainName)) {
    throw new Error(
      "Can't check availability for a domain name that doesn't contain a Romanian top level domain."
    );
  }

  const commandName = "domain-renew";

  return [commandName, domainName];
};

module.exports = domainRegister;
