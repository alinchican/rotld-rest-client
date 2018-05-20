const schemaValidator = require("../../schemaValidator");
const schema = require("../command-trade-info.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => schemaValidator.assert({}, schema)).toThrow();
});

test("should throw on invalid argument", () => {
  expect(() => schemaValidator.assert("tradeid", schema)).toThrow();
});

test("should throw with missing trade id number", () => {
  expect(() => schemaValidator.assert({ tid: "" }, schema)).toThrow();
});

test("should throw with invalid trade id variable type", () => {
  expect(() => schemaValidator.assert({ tid: "tradeid" }, schema)).toThrow();
});

test("should throw with invalid trade id number", () => {
  expect(() => schemaValidator.assert({ tid: "2.2" }, schema)).toThrow();
});

test("should return true on valid trade id number", () => {
  expect(schemaValidator.assert({ tid: "2" }, schema)).toBeUndefined();
});
