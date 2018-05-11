// -d "tid=44" https://rest2-test.rotld.ro:6080

const tradeInfo = tradeId => {
  // tid [integer] [mandatory]:	a	trade	id

  const commandName = "trade-info";

  return [commandName, tradeId];
};

module.exports = tradeInfo;
