const schemaValidator = require("../../schemaValidator");
const schema = require("../command-domain-transfer.schema");

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
        authorization_key: "BPKerUnZM7vhy2A"
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

test("should throw with invalid domain (containing punycode)", () => {
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

test("should throw without authorization_key", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid authorization_key (wrong type)", () => {
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

test("should throw with invalid authorization_key (not a RoTLD alphanum)", () => {
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
