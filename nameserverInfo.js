// -d "nameserver= ns.rnc.ro" https://rest2-test.rotld.ro:6080

const nameserverInfo = nameserver => {
  // nameserver	[string]:	a	.ro	valid	nameserver	[mandatory]

  const commandName = "nameserver-info";

  return [commandName, nameserver];
};

module.exports = nameserverInfo;
