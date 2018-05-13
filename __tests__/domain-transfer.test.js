const domainTransfer = require("../domain-transfer");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(domainTransfer()).rejects.toBeInstanceOf(TypeError);
});
