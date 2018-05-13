const isValidRoTLDCountryCode = require("../isValidRoTLDCountryCode");

test("should throw without argument", () => {
  expect(() => isValidRoTLDCountryCode()).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => isValidRoTLDCountryCode("")).toThrow();
});

test("should return false with invalid person type", () => {
  expect(isValidRoTLDCountryCode("OK")).toBe(false);
});

test("should return true with valid person type", () => {
  expect(isValidRoTLDCountryCode("RO")).toBe(true);
});
