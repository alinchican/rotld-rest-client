const checkBalance = require("../check-balance");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(checkBalance()).rejects.toBeInstanceOf(TypeError);
});
