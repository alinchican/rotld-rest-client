const schemaValidator = require("../../schemaValidator");
const schema = require("../command-trade-confirm.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => schemaValidator.assert({}, schema)).toThrow();
});

test("should throw on invalid argument (wrong type)", () => {
  expect(() => schemaValidator.assert("tradeid", schema)).toThrow();
});

test("should return undefined", () => {
  expect(schemaValidator.assert({ tid: "2" }, schema)).toBeUndefined();
});

test("should throw without tid", () => {
  expect(() => schemaValidator.assert({ tid: "" }, schema)).toThrow();
});

test("should throw with invalid tid (wrong type)", () => {
  expect(() => schemaValidator.assert({ tid: "tradeid" }, schema)).toThrow();
});

test("should throw with invalid tid (not integer)", () => {
  expect(() => schemaValidator.assert({ tid: "2.2" }, schema)).toThrow();
});
