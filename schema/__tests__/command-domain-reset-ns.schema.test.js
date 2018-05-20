const schemaValidator = require("../../schemaValidator");
const schema = require("../command-domain-reset-ns.schema");

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
        nameservers: "ns1.xn--yla.ro,ns2.xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw without domain", () => {
  expect(() =>
    schemaValidator.assert(
      {
        nameservers: "ns1.xn--yla.ro,ns2.xn--yla.ro"
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
        nameservers: "ns1.xn--yla.ro,ns2.xn--yla.ro"
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
        nameservers: "ns1.xn--yla.ro,ns2.xn--yla.ro"
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
        nameservers: "ns1.xn--yla.ro,ns2.xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid nameservers variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        nameservers: ["ns1.xn--yla.ro", "ns2.xn--yla.ro"]
      },
      schema
    )
  ).toThrow();
});

test("should throw without nameservers", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid nameservers (length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        nameservers:
          "ns1.xn--yla.ro,ns2.xn--yla.ro,ns3.xn--yla.ro,ns4.xn--yla.ro,ns5.xn--yla.ro,ns6.xn--yla.ro,ns7.xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid nameservers (punycode)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        nameservers: "ns1.ș.ro,ns2.xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid nameservers (port)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        nameservers: "ns1.xn--yla.ro:80,ns2.xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should return undefined with empty nameservers ", () => {
  expect(
    schemaValidator.assert(
      {
        domain: "www.xn--yla.ro",
        nameservers: ""
      },
      schema
    )
  ).toBeUndefined();
});

test("should return undefined", () => {
  expect(
    schemaValidator.assert(
      {
        domain: "www.xn--yla.ro",
        nameservers: "ns1.xn--yla.ro"
      },
      schema
    )
  ).toBeUndefined();
});
