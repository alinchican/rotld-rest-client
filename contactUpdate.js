// -d "cid=C609899" --data-urlencode "address1=Strada9 Mai Nr.6" --data-urlencode "address2=Bl.1, Sc.1, Ap.1, Et.1" --data-urlencode "city=Bucuresti" --data-urlencode "state_province=Sector 6" --data-urlencode "phone=+40.7263888" --data-urlencode "email=radu@rotld.ro" --data-urlencode "country_code=RO" https://rest2-test.rotld.ro:6080

const contactUpdate = contact => {
  //   cid [string]:	registrant	id	[mandatory]
  // § address1 [string:utf-8]	[mandatory]:	Max	Length:	128	chars.	Min.	Length:	1 char.
  // § address2[string:utf-8]	[optional]:	Max	Length:	128	chars.	Min.	Length:	1 char.
  // § address3[string:utf-8]	[optional]:	Max	Length:	128	chars.	Min.	Length:	1 char.
  // § city[string:utf-8]	[mandatory]: Max	Length:	40	chars.	Min.	Length:	1 char.
  // § state_province[string:utf-8]	[optional]: Max	Length:	40	chars.	Min.	Length:	 1	char.
  // § postal_code[string:utf-8]	[optional]: Max	Length:	40	chars.	Min.	Length:	1	char.
  // § country_code[mandatory]: 2	chars	country	code	according	to	ISO	3166-1-alpha-2
  // http://dev.rotld.ro/documents/iso-3166-2-code-countries-list
  // § phone [string:ascii]	[mandatory]: Mandatory	format:	+ccc.nnnnnnnnn (E.G.	+40.727636787)	where	ccc is	the
  // country	code	(http://countrycode.org/)	and	nnnnnnnnn is	the	local	number.	Max	Length:	20	chars.
  // § fax[string:ascii]	[optional]:	Mandatory	format:	same	as	the	phone	number	format. Max	Length:	20	chars.
  // § email[string:ascii] ]	[mandatory] :	Max	Length:	128	chars.
  const commandName = "contact-update";

  return [commandName, contact];
};

module.exports = contactUpdate;
