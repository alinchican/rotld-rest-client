const isValidRoTLDPersonType = require("../isValidRoTLDPersonType");

test("should throw without argument", () => {
  expect(() => isValidRoTLDPersonType()).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => isValidRoTLDPersonType("")).toThrow();
});

test("should return false with invalid person type", () => {
  expect(isValidRoTLDPersonType("pix")).toBe(false);
});

test("should return true with valid person type", () => {
  expect(isValidRoTLDPersonType("pi")).toBe(true);
});
