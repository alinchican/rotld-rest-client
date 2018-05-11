// -d "domains_list=example.ro,example1.ro" –d "period=1" https://rest2-test.rotld.ro:6080

const checkRenewalAvailability = (domainList, period) => {
  // domains_list	[string] [mandatory]:	list	of	domains	separated	by	“,”
  // § period	[string] [mandatory]:	a	number	between	1	and	10]	which	represents	the	number	of	years.		A	year	has
  // 365	days	and	it	does	not	account	the	leap	years.

  const commandName = "check-renewal-availability";

  return [commandName, domainList, period];
};

module.exports = checkRenewalAvailability;
