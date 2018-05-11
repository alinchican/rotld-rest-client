// -d "format=json" -d "nameserver=ns.test-28-09.ro" https://rest2-test.rotld.ro:6080

const nameserverDelete = nameserver => {
  // § nameserver [string:ascii][mandatory]

  const commandName = "nameserver-delete";

  return [commandName, nameserver];
};

module.exports = nameserverDelete;
