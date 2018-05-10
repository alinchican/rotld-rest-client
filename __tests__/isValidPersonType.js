const isValidPersonType = require("../isValidPersonType");

test("should throw without argument", () => {
  expect(() => isValidPersonType()).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => isValidPersonType("")).toThrow();
});

test("should return false with invalid person type", () => {
  expect(isValidPersonType("pix")).toBe(false);
});

test("should return true with valid person type", () => {
  expect(isValidPersonType("pi")).toBe(true);
});
