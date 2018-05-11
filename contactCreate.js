// --data-urlencode "name=Radu Boncea" --dataurlencode "address1=Strada 9 Mai Nr.6" --data-urlencode "address2=Bl.1, Sc.1, Ap.1, Et.1" --data-urlencode "city=Bucuresti" --dataurlencode "state_province=Sector 6" --data-urlencode "phone=+40.7263888" --data-urlencode "email=radu@rotld.ro" --dataurlencode "country_code=RO" --data-urlencode "person_type=p" --data-urlencode "cnp_fiscal_code=19999999999999" https://rest2-test.rotld.ro:6080

const contactCreate = contact => {
  //   format	[string]:	json|xml	defaults	to	‘json’	[optional]
  // § lang	[string]:	en|ro	defaults	to	‘en’	[optional]
  // § name [string:utf-8]	[mandatory]:	the	name	of	the	person	or	the	company	who	holds	the	right	of	use	for	the
  // domain	name.	Max	Length:	128 chars. Min.	Length:	2 chars.
  // § address1 [string:utf-8]	[mandatory]:	Max	Length:	128	chars.	Min.	Length:	1 char.
  // § address2[string:utf-8]	[optional]:	Max	Length:	128	chars.	Min.	Length:	1 char.
  // § address3[string:utf-8]	[optional]:	Max	Length:	128	chars. Min.	Length:	1 char.
  // § city[string:utf-8]	[mandatory]: Max	Length:	40	chars.	Min.	Length:	1 char.
  // § state_province[string:utf-8]	[mandatory]: Max	Length:	40	chars.	Min.	Length:	1 char.
  // § postal_code[string:utf-8]	[optional]: Max	Length:	40	chars.	Min.	Length:	1 char.
  // § country_code[mandatory]: 2	chars	country	code	according	to	ISO	3166-1-alpha-2
  // http://dev.rotld.ro/documents/iso-3166-2-code-countries-list
  // § phone [string:ascii]	[mandatory]: Mandatory	format:	+ccc.nnnnnnnnn (E.G.	+40.727636787)	where	ccc is	the
  // country	code (http://countrycode.org/)	and	nnnnnnnnn is	the	local	number.	Max	Length:	20	chars.
  // § fax[string:ascii]	[optional]:	Mandatory	format: same	as	the	phone	number	format. Max	Length:	20	chars.
  // § email[string:ascii] ]	[mandatory] :	Max	Length:	128	chars.
  // § person_type[string] [mandatory] :	Pemited	values:	p|ap|nc|c|gi|pi|o
  // § cnp_fiscal_code[string:utf-8]	[mandatory]:	An	identification	number	for	pesons	(personl	ID,	passport	number,
  // driving	license,	etc),fiscal	code	for	companies	or	other	unique	identification	number	or	sequence	of	characters
  // for	juridical	entities. Mandatory	for	Romanian	entities.	Optional	for	foreigners. Max	Length:	40	chars.	Min.
  // Length:	5	chars.
  // § registration_number [string:utf-8]	[optional].	Mandatory	for Commercial	Romanian	entities (where
  // person_type	is	'c'). Optional	for	foreigners or	other	Romanian	entities.	Max	Length:	40	chars
  const commandName = "contact-create";

  return [commandName, contact];
};

module.exports = contactCreate;
