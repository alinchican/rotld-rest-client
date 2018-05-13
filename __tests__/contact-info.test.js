const contactInfo = require("../contact-info");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(contactInfo()).rejects.toBeInstanceOf(TypeError);
});
