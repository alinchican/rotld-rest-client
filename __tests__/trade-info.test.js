const tradeInfo = require("../trade-info");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(tradeInfo()).rejects.toBeInstanceOf(TypeError);
});
