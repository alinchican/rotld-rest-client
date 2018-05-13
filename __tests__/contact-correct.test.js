const contactCorrect = require("../contact-correct");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(contactCorrect()).rejects.toBeInstanceOf(TypeError);
});
