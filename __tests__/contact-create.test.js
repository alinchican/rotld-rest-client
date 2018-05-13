const contactCreate = require("../contact-create");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(contactCreate()).rejects.toBeInstanceOf(TypeError);
});
