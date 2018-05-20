const schemaValidator = require("../../schemaValidator");
const schema = require("../command-domain-trade.schema");

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

test("should throw with invalid domain (punycode)", () => {
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

test("should throw with invalid password variable type", () => {
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

test("should throw with invalid password length (min)", () => {
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

test("should throw with invalid password length (max)", () => {
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

test("should throw with invalid password characters (without uppercase)", () => {
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

test("should throw with invalid password characters (without lowercase)", () => {
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

test("should throw with invalid password characters (without digit)", () => {
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

test("should throw with invalid password characters (invalid character)", () => {
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

test("should throw with invalid domain (not a RoTLD domain)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.com",
        authorization_key: "BPKerUnZM7vhy2A",
        c_registrant: "cregistrant",
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
        authorization_key: "BPKerUnZM7vhy2A",
        c_registrant: "cregistrant",
        domain_period: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw without authorization key", () => {
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

test("should throw with invalid authorization key variable type", () => {
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

test("should throw with invalid authorization key (not RoTLD alphanum)", () => {
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

test("should throw without period", () => {
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

test("should throw with invalid period number", () => {
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

test("should throw with invalid period number type", () => {
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

test("should throw with invalid period min", () => {
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

test("should throw with invalid period max", () => {
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
