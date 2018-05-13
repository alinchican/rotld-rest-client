const domainResetNS = require("../domain-reset-ns");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(domainResetNS()).rejects.toBeInstanceOf(TypeError);
});
