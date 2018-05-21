const schemaValidator = require("../../schemaValidator");
const schema = require("../command-check-renewal-availability.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => schemaValidator.assert({}, schema)).toThrow();
});

test("should throw on invalid argument", () => {
  expect(() => schemaValidator.assert([2], schema)).toThrow();
});

test("should throw with invalid domains list variable type", () => {
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

test("should throw without domains list", () => {
  expect(() =>
    schemaValidator.assert(
      {
        period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domains list containing non-ascii domain names", () => {
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

test("should throw with invalid domains list containing too many domains", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domains_list:
          "xn--yla.ro,xn--bicoi-rwa.ro,xn--yla.ro,xn--bicoi-rwa.ro,xn--yla.ro,xn--bicoi-rwa.ro,xn--yla.ro,xn--bicoi-rwa.ro",
        period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domains list containing domain names with subdomains", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domains_list: "www.ș.ro,băicoi.ro",
        period: 1
      },
      schema
    )
  ).toThrow();
});

test("should return undefined with valid domains list", () => {
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

test("should throw with invalid period variable type", () => {
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

test("should throw with invalid period number", () => {
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

test("should throw with invalid period number type", () => {
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

test("should throw with invalid period min", () => {
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

test("should throw with invalid period max", () => {
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
