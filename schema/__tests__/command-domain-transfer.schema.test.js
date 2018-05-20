const schemaValidator = require("../../schemaValidator");
const schema = require("../command-domain-transfer.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw on invalid argument", () => {
  expect(() => schemaValidator.assert(1, schema)).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => schemaValidator.assert({}, schema)).toThrow();
});

test("should throw with invalid domain variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: ["xn--yla.ro"],
        authorization_key: "BPKerUnZM7vhy2A"
      },
      schema
    )
  ).toThrow();
});

test("should throw without domain", () => {
  expect(() =>
    schemaValidator.assert(
      {
        authorization_key: "BPKerUnZM7vhy2A"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domain (punycode)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "ș.ro",
        authorization_key: "BPKerUnZM7vhy2A"
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
        authorization_key: "BPKerUnZM7vhy2A"
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
        authorization_key: "BPKerUnZM7vhy2A"
      },
      schema
    )
  ).toThrow();
});

test("should throw without authorization key", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid authorization key variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        authorization_key: ["BPKerUnZM7vhy2A"]
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid authorization key (not RoTLD alphanum)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        authorization_key: "BPKȘer_UnZM7vhy2A"
      },
      schema
    )
  ).toThrow();
});

test("should return undefined", () => {
  expect(
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        authorization_key: "BPKerUnZM7vhy2A"
      },
      schema
    )
  ).toBeUndefined();
});
