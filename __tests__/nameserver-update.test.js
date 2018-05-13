const nameserverUpdate = require("../nameserver-update");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(nameserverUpdate()).rejects.toBeInstanceOf(TypeError);
});
