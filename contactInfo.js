// -d "cid=C538089" https://rest2-test.rotld.ro:6080

const contactInfo = registrantId => {
  // cid	[string]:	registrant	id	[mandatory]
  const commandName = "contact-info";

  return [commandName, registrantId];
};

module.exports = contactInfo;
