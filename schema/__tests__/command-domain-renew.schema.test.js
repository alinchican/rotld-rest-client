const schemaValidator = require("../../schemaValidator");
const schema = require("../command-domain-renew.schema");

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
        domain: "xn--yla.ro",
        domain_period: 1
      },
      schema
    )
  ).toBeUndefined();
});

test("should throw with invalid domain (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: ["xn--yla.ro"],
        domain_period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw without domain", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain_period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domain (containing punycode)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "ș.ro",
        domain_period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domain (not a RoTLD domain)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.com",
        domain_period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domain (containing subdomain)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "www.xn--yla.ro",
        domain_period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw without domain_period", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domain_period (not integer)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        domain_period: 2.2
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domain_period (min value)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        domain_period: 0
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domain_period (max value)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        domain_period: 11
      },
      schema
    )
  ).toThrow();
});
