const schemaValidator = require("../../schemaValidator");
const schema = require("../command-nameserver-info.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw on invalid argument (wrong type)", () => {
  expect(() => schemaValidator.assert(1, schema)).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => schemaValidator.assert({}, schema)).toThrow();
});

test("should return undefined", () => {
  expect(
    schemaValidator.assert(
      {
        nameserver: "ns1.xn--yla.ro"
      },
      schema
    )
  ).toBeUndefined();
});

test("should throw with invalid nameserver (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        nameserver: ["ns1.xn--yla.ro"]
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid nameserver (containing punycode)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        nameserver: "ns1.ș.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid nameserver (containing port)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        nameserver: "ns1.xn--yla.ro:80"
      },
      schema
    )
  ).toThrow();
});
