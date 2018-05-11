const isRoTLDDomain = require("rotld-toolbox/isRoTLDDomain");
// -d "domain=rnc.ro" https://rest2-test.rotld.ro:6080
const domainInfo = (domainName, dsRecord) => {
  //§ domain	[string]:	a	.ro	valid	domain	name	[mandatory]
  if (!isRoTLDDomain(domainName)) {
    throw new Error(
      "Can't check availability for a domain name that doesn't contain a Romanian top level domain."
    );
  }

  const commandName = "domain-info";

  return [commandName, dsRecord];
};

module.exports = domainInfo;
