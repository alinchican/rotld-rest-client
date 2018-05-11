const isRoTLDDomain = require("rotld-toolbox/isRoTLDDomain");
// -d "domain= testingdsdata.ro" -d "keytag=12345" -d "alg=3" -d "digest_type=1" -d "digest=D524641568295383535BB836401BB8B836401BB8" https://rest2-test.rotld.ro:6080

const domainDSdataAdd = (domainName, dsRecord) => {
  //   domain [string]:	a	registered	.ro	domain	[mandatory]
  // § keytag	[numeric][mandatory]:	has	values	between 0	si	65535
  // § alg [numeric][mandatory]:	the	permitted	values	are	[3,	5,	6,	7,	8,	10,	12,	13,	14].
  // § digest_type [numeric][mandatory]:	the	permitted	values	are	[1,2]
  // § digest	[string] [mandatory]:	 has	only	hexadecimal	characters.	The	length	and	is	40	characters	(20	bytes)	for
  // digest_type	=	1	or	64	characters	(32	bytes)	for	digest_type	=	2.	NOTE:	The	length	of	the	digest	is	calculated	after
  // trimming.	The	hash	is	saved	in	the	database,	in	a	validated	form(trimmed).
  if (!isRoTLDDomain(domainName)) {
    throw new Error(
      "Can't check availability for a domain name that doesn't contain a Romanian top level domain."
    );
  }

  const commandName = "domain-dsdata-add";

  return [commandName, dsRecord];
};

module.exports = domainDSdataAdd;
