const schemaValidator = require("../../schemaValidator");
const schema = require("../command-nameserver-info.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw on invalid argument", () => {
  expect(() => schemaValidator.assert(1, schema)).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => schemaValidator.assert({}, schema)).toThrow();
});

test("should throw with invalid nameserver variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        nameserver: ["ns1.xn--yla.ro"]
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid nameserver (punycode)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        nameserver: "ns1.ș.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid nameserver (port)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        nameserver: "ns1.xn--yla.ro:80"
      },
      schema
    )
  ).toThrow();
});

test("should return undefined with valid nameserver", () => {
  expect(
    schemaValidator.assert(
      {
        nameserver: "ns1.xn--yla.ro"
      },
      schema
    )
  ).toBeUndefined();
});
