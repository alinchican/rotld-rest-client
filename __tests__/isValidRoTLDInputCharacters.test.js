const isValidRoTLDInputCharacters = require("../isValidRoTLDInputCharacters");

test("should throw without argument", () => {
  expect(() => isValidRoTLDInputCharacters()).toThrow();
});

test("should return true with valid characters", () => {
  expect(isValidRoTLDInputCharacters("¢evașpecial")).toBe(true);
});

test("should return false with invalid characters", () => {
  expect(isValidRoTLDInputCharacters("¢evaƒin")).toBe(false);
});
