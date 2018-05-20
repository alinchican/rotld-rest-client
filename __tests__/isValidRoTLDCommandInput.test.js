const isValidRoTLDCommandInput = require("../isValidRoTLDCommandInput");

test("should throw without argument", () => {
  expect(() => isValidRoTLDCommandInput()).toThrow();
});

test("should throw on empty command name", () => {
  expect(() => isValidRoTLDCommandInput("")).toThrow();
});

test("should throw with invalid command name", () => {
  expect(() => isValidRoTLDCommandInput("hellox", {})).toThrow();
});

test("should throw with invalid input", () => {
  expect(() => isValidRoTLDCommandInput("hello", {})).toThrow();
});

test("should return true", () => {
  expect(isValidRoTLDCommandInput("hello")).toBe(true);
});
