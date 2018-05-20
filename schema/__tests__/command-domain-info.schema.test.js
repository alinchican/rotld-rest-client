const schemaValidator = require("../../schemaValidator");
const schema = require("../command-domain-info.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => schemaValidator.assert({}, schema)).toThrow();
});

test("should throw on invalid argument", () => {
  expect(() => schemaValidator.assert(["ș.ro"], schema)).toThrow();
});

test("should throw on invalid domain variable type", () => {
  expect(() =>
    schemaValidator.assert({ domain: ["xn--yla.ro"] }, schema)
  ).toThrow();
});

test("should throw on invalid domain", () => {
  expect(() => schemaValidator.assert({ domain: "ș" }, schema)).toThrow();
});

test("should throw on invalid RoTLD domain", () => {
  expect(() =>
    schemaValidator.assert({ domain: "xn--yla.com" }, schema)
  ).toThrow();
});

test("should return undefined", () => {
  expect(
    schemaValidator.assert({ domain: "xn--yla.ro" }, schema)
  ).toBeUndefined();
});
