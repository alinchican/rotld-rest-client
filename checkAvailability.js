const isRoTLDDomain = require("rotld-toolbox/isRoTLDDomain");
// -d "domain=justadomain4test.ro" https://rest2-test.rotld.ro:6080

const checkAvailability = domainName => {
  // § domain	[string]:	a	valid	.ro	domain	name	[mandatory]
  if (!isRoTLDDomain(domainName)) {
    throw new Error(
      "Can't check availability for a domain name that doesn't contain a Romanian top level domain."
    );
  }

  const commandName = "check-availability";

  return [commandName, domainName];
};

module.exports = checkAvailability;
