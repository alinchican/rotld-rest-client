const domainRenew = require("../domain-renew");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(domainRenew()).rejects.toBeInstanceOf(TypeError);
});
