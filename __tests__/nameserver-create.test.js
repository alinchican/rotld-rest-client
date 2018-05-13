const nameserverCreate = require("../nameserver-create");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(nameserverCreate()).rejects.toBeInstanceOf(TypeError);
});
