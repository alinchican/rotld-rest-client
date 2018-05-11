// "command=check-balance" https://rest2-test.rotld.ro:6080

const checkBalance = registrarId => {
  // § registrar_id[integer]	[optional]:	registrar	id
  const commandName = "check-balance";

  return [commandName, registrarId];
};

module.exports = checkBalance;
