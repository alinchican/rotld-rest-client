const isValidInput = require("../isValidInput");

test("should throw without argument", () => {
  expect(() => isValidInput()).toThrow();
});

test("should return true on valid strings", () => {
  expect(isValidInput("¢evașpecial")).toBe(true);
});

test("should return false on domain without Romanian tld", () => {
  expect(isValidInput("¢evaƒin.com")).toBe(false);
});
