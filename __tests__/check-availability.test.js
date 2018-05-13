const checkAvailability = require("../check-availability");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(checkAvailability()).rejects.toBeInstanceOf(TypeError);
});
