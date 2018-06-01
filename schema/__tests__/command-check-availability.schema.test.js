const schemaValidator = require("../../schemaValidator");
const schema = require("../command-check-availability.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => schemaValidator.assert({}, schema)).toThrow();
});

test("should throw on invalid argument (wrong type)", () => {
  expect(() => schemaValidator.assert(["ș.ro"], schema)).toThrow();
});

test("should return undefined", () => {
  expect(schemaValidator.assert({ domain: "ș.ro" }, schema)).toBeUndefined();
});

test("should throw on invalid domain (wrong type)", () => {
  expect(() => schemaValidator.assert({ domain: 1 }, schema)).toThrow();
});

test("should throw on invalid domain (wrong format)", () => {
  expect(() => schemaValidator.assert({ domain: "ș" }, schema)).toThrow();
});

test("should throw on invalid domain (not a RoTLD domain)", () => {
  expect(() =>
    schemaValidator.assert({ domain: "xn--yla.com" }, schema)
  ).toThrow();
});
