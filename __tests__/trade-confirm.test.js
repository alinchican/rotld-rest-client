const tradeConfirm = require("../trade-confirm");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(tradeConfirm()).rejects.toBeInstanceOf(TypeError);
});
