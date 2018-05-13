const domainInfo = require("../domain-info");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(domainInfo()).rejects.toBeInstanceOf(TypeError);
});
