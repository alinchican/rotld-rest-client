const isRoTLDDomain = require("rotld-toolbox/isRoTLDDomain");
// -d "domain=testing-registration.ro" --data-urlencode "authorization_key=BPKerUnZM7vhy2A" https://rest2-test.rotld.ro:6080

const domainTransfer = (domainName, authorizationKey) => {
  //  domain [string:ascii] [mandatory]:	a	.ro	domain
  //§ authorization_key	[string:alphanum] [mandatory]:	the	authorization	key	provided	by	the	registrant
  if (!isRoTLDDomain(domainName)) {
    throw new Error(
      "Can't check availability for a domain name that doesn't contain a Romanian top level domain."
    );
  }

  const commandName = "domain-transfer";

  return [commandName, domainName, authorizationKey];
};

module.exports = domainTransfer;
