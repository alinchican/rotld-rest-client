const nameserverDelete = require("../nameserver-delete");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(nameserverDelete()).rejects.toBeInstanceOf(TypeError);
});
