const schemaValidator = require("../../schemaValidator");
const schema = require("../command-check-renewal-availability.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => schemaValidator.assert({}, schema)).toThrow();
});

test("should throw on invalid argument (wrong type)", () => {
  expect(() => schemaValidator.assert([2], schema)).toThrow();
});

test("should return undefined", () => {
  expect(
    schemaValidator.assert(
      {
        domains_list: "xn--yla.www.ro,xn--bicoi-rwa.ro",
        period: 1
      },
      schema
    )
  ).toBeUndefined();
});

test("should throw with invalid domains_list (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domains_list: ["ș.ro"],
        period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw without domains_list", () => {
  expect(() =>
    schemaValidator.assert(
      {
        period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domains_list (non-ascii domain names)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domains_list: "ș.ro,băicoi.ro",
        period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domains_list (domain names with subdomains)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domains_list: "www.xn--yla.ro",
        period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domains_list (domain names invalid)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domains_list: "xn--yla",
        period: 1
      },
      schema
    )
  ).toThrow();
});

test("should return undefined with valid domains_list", () => {
  expect(
    schemaValidator.assert(
      {
        domains_list: "xn--yla.ro,xn--bicoi-rwa.ro",
        period: 1
      },
      schema
    )
  ).toBeUndefined();
});

test("should throw with invalid period (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domains_list: "xn--yla.ro,xn--bicoi-rwa.ro",
        period: "one"
      },
      schema
    )
  ).toThrow();
});

test("should throw without period", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domains_list: "xn--yla.ro,xn--bicoi-rwa.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid period (not integer)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domains_list: "xn--yla.ro,xn--bicoi-rwa.ro",
        period: 2.2
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid period (min value)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domains_list: "xn--yla.ro,xn--bicoi-rwa.ro",
        period: 0
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid period (max value)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domains_list: "xn--yla.ro,xn--bicoi-rwa.ro",
        period: 11
      },
      schema
    )
  ).toThrow();
});
