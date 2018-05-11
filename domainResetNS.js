const isRoTLDDomain = require("rotld-toolbox/isRoTLDDomain");
// -d "domain=testing-registration.ro" --data-urlencode "nameservers=ns.testing-registration.ro,ns2.testing-registration.ro" https://rest2-test.rotld.ro:6080

const domainResetNS = domainName => {
  //   domain [string:ascii] [mandatory]:	a	.ro	domain
  // § nameservers [string:ascii] [mandatory]:	A	comma	separated	list	of	nameservers.	Maximum	allowed	number	of
  // nameservers	is	6.	If	nameservers parameter	is	empty,	the	current	nameservers	of	the	domain	will	be	deleted,
  // thus	the	domain	will	have	no	nameservers	declared.
  if (!isRoTLDDomain(domainName)) {
    throw new Error(
      "Can't check availability for a domain name that doesn't contain a Romanian top level domain."
    );
  }

  const commandName = "domain-reset-ns";

  return [commandName, domainName];
};

module.exports = domainResetNS;
