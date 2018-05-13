const domainActivate = require("../domain-activate");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(domainActivate()).rejects.toBeInstanceOf(TypeError);
});
