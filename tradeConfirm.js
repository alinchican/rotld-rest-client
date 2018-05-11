// -d "tid=44" https://rest2-test.rotld.ro:6080

const tradeConfirm = tradeId => {
  // tid [integer] [mandatory]:	a	trade	id

  const commandName = "trade-confirm";

  return [commandName, tradeId];
};

module.exports = tradeConfirm;
