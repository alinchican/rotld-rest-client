const schemaValidator = require("../../schemaValidator");
const schema = require("../command-poll-fetch.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw on invalid argument (wrong type)", () => {
  expect(() => schemaValidator.assert(1, schema)).toThrow();
});

test("should return undefined", () => {
  expect(
    schemaValidator.assert({ include_counter: "1" }, schema)
  ).toBeUndefined();
});

test("should throw with invalid include_counter (wrong type)", () => {
  expect(() =>
    schemaValidator.assert({ include_counter: true }, schema)
  ).toThrow();
});

test("should throw with invalid include_counter (non-existent option)", () => {
  expect(() =>
    schemaValidator.assert({ include_counter: "0" }, schema)
  ).toThrow();
});
