const contactUpdate = require("../contact-update");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(contactUpdate()).rejects.toBeInstanceOf(TypeError);
});
