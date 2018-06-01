const schemaValidator = require("../../schemaValidator");
const schema = require("../command-domain-trade.schema");

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
        authorization_key: "BPKerUnZM7vhy2A",
        c_registrant: "cregistrant",
        domain_password: "Aa1Aa1",
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
        authorization_key: "BPKerUnZM7vhy2A",
        c_registrant: "cregistrant",
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
        authorization_key: "BPKerUnZM7vhy2A",
        c_registrant: "cregistrant",
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
        authorization_key: "BPKerUnZM7vhy2A",
        c_registrant: "cregistrant",
        domain_period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domain_password (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        authorization_key: "BPKerUnZM7vhy2A",
        c_registrant: "cregistrant",
        domain_password: 1234,
        domain_period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domain_password length (min length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        authorization_key: "BPKerUnZM7vhy2A",
        c_registrant: "cregistrant",
        domain_password: "Aa1",
        domain_period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domain_password length (max length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        authorization_key: "BPKerUnZM7vhy2A",
        c_registrant: "cregistrant",
        domain_password: "Aa1passwordthatcontainsoverfortycharacters",
        domain_period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domain_password (without uppercase)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        authorization_key: "BPKerUnZM7vhy2A",
        c_registrant: "cregistrant",
        domain_password: "aaaa1",
        domain_period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domain_password (without lowercase)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        authorization_key: "BPKerUnZM7vhy2A",
        c_registrant: "cregistrant",
        domain_password: "AAAA1",
        domain_period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domain_password (without digit)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        authorization_key: "BPKerUnZM7vhy2A",
        c_registrant: "cregistrant",
        domain_password: "AaAaA",
        domain_period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domain_password (invalid character)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        authorization_key: "BPKerUnZM7vhy2A",
        c_registrant: "cregistrant",
        domain_password: "Aa1Aa1ș",
        domain_period: 1
      },
      schema
    )
  ).toThrow();
});

test("should not throw without c_registrant", () => {
  expect(
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        authorization_key: "BPKerUnZM7vhy2A",
        domain_period: 1
      },
      schema
    )
  ).toBeUndefined();
});

test("should throw with invalid c_registrant (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        reservation: true,
        authorization_key: "BPKerUnZM7vhy2A",
        c_registrant: ["cregistrant"],
        domain_period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw without authorization_key", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        c_registrant: "cregistrant",
        domain_period: 1
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
        authorization_key: ["BPKerUnZM7vhy2A"],
        c_registrant: "cregistrant",
        domain_period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid authorization_key (not RoTLD alphanum)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        authorization_key: "BPKȘer_UnZM7vhy2A",
        c_registrant: "cregistrant",
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
        domain: "xn--yla.ro",
        authorization_key: "BPKȘer_UnZM7vhy2A",
        c_registrant: "cregistrant"
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
        authorization_key: "BPKȘer_UnZM7vhy2A",
        c_registrant: "cregistrant",
        domain_period: 2.2
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domain_period (min length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        authorization_key: "BPKȘer_UnZM7vhy2A",
        c_registrant: "cregistrant",
        domain_period: 0
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid domain_period (max length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        authorization_key: "BPKȘer_UnZM7vhy2A",
        c_registrant: "cregistrant",
        domain_period: 11
      },
      schema
    )
  ).toThrow();
});
