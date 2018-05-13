const nameserverInfo = require("../nameserver-info");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(nameserverInfo()).rejects.toBeInstanceOf(TypeError);
});
