const domainRegister = require("../domain-register");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(domainRegister()).rejects.toBeInstanceOf(TypeError);
});
