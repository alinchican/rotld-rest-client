const isValidInput = require("../isValidInput");

test("should throw without argument", () => {
  expect(() => isValidInput()).toThrow();
});

test("should return true with valid characters", () => {
  expect(isValidInput("¢evașpecial")).toBe(true);
});

test("should return false with invalid characters", () => {
  expect(isValidInput("¢evaƒin")).toBe(false);
});
