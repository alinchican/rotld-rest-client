const isRoTLDDomain = require("rotld-toolbox/isRoTLDDomain");
// -d "domain= testingdsdata.ro" -d "keytag=12345" -d "alg=3" -d https://rest2-test.rotld.ro:6080

const domainDSdataRemove = (domainName, dsRecord) => {
  //   domain [string]:	a	registered	.ro	domain	[mandatory]
  // § keytag	[numeric] [optional] has	values	between 0	si	65535
  // § alg [numeric] [optional]:	the	permitted	values	are	[3,	5,	6,	7,	8,	10,	12,	13,	14].
  // § digest_type [numeric] [optional]:	the	permitted	values	are	[1,2]
  // § digest	[string] [optional]:	 has	only	hexadecimal	characters.	The	length	and	is	40	characters	(20	bytes)	for
  // digest_type	=	1	or	64	characters	(32	bytes)	for	digest_type	=	2.	NOTE:	The	length	of	the	digest	is	calculated	after
  // trimming.	The	hash	is	saved	in	the	database,	in	a	validated	form(trimmed).
  if (!isRoTLDDomain(domainName)) {
    throw new Error(
      "Can't check availability for a domain name that doesn't contain a Romanian top level domain."
    );
  }

  const commandName = "domain-dsdata-remove";

  return [commandName, dsRecord];
};

module.exports = domainDSdataRemove;
