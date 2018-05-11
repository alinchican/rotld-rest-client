const isRoTLDDomain = require("rotld-toolbox/isRoTLDDomain");
// -d "format=json" -d "domain=testing-registration.ro" https://rest2-test.rotld.ro:6080

const domainActivate = domainName => {
  // § domain [string:ascii] [mandatory]:	a	.ro	domain
  if (!isRoTLDDomain(domainName)) {
    throw new Error(
      "Can't check availability for a domain name that doesn't contain a Romanian top level domain."
    );
  }

  const commandName = "domain-activate";

  return [commandName, domainName];
};

module.exports = domainActivate;
