// -d "nameserver=ns.test-28-09.ro" --data-urlencode "ips=10.10.10.10" https://rest2-test.rotld.ro:6080

const nameserverUpdate = (nameserver, ipList) => {
  // nameserver [string:ascii][mandatory]
  // ips[string:ascii] [mandatory]:	A	comma	separated	list	of IPs.	At	least	one	valid	IP	is	required.	Maximum	allowed
  // number	of	IPs	is	2.	IP	version	support:IPv4	and	IPv6.	E.g.:	196.102.12.1,	2001:db8::1428:57ab.

  const commandName = "nameserver-update";

  return [commandName, nameserver, ipList];
};

module.exports = nameserverUpdate;
