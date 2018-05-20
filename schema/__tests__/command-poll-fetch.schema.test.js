const schemaValidator = require("../../schemaValidator");
const schema = require("../command-poll-fetch.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw on invalid argument", () => {
  expect(() => schemaValidator.assert(1, schema)).toThrow();
});

test("should throw with invalid include counter variable type", () => {
  expect(() =>
    schemaValidator.assert({ include_counter: true }, schema)
  ).toThrow();
});

test("should throw with invalid include counter number", () => {
  expect(() =>
    schemaValidator.assert({ include_counter: "0" }, schema)
  ).toThrow();
});

test("should return true on valid counter number", () => {
  expect(
    schemaValidator.assert({ include_counter: "1" }, schema)
  ).toBeUndefined();
});
