const domainTrade = require("../domain-trade");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(domainTrade()).rejects.toBeInstanceOf(TypeError);
});
