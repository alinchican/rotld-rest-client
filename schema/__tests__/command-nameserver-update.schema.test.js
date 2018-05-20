const schemaValidator = require("../../schemaValidator");
const schema = require("../command-nameserver-update.schema");

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
        nameserver: ["ns1.xn--yla.ro"],
        ips: "192.168.0.1"
      },
      schema
    )
  ).toThrow();
});

test("should throw without nameserver", () => {
  expect(() =>
    schemaValidator.assert(
      {
        ips: "192.168.0.1"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid nameserver (punycode)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        nameserver: "ns1.ș.ro",
        ips: "192.168.0.1"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid nameserver (port)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        nameserver: "ns1.xn--yla.ro:80",
        ips: "192.168.0.1"
      },
      schema
    )
  ).toThrow();
});

test("should throw without ips", () => {
  expect(() =>
    schemaValidator.assert(
      {
        nameserver: "ns1.xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid ips variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        nameserver: "ns1.xn--yla.ro",
        ips: ["192.168.0.1", "192.168.0.2"]
      },
      schema
    )
  ).toThrow();
});

test("should throw with empty ips", () => {
  expect(() =>
    schemaValidator.assert(
      {
        nameserver: "ns1.xn--yla.ro",
        ips: ""
      },
      schema
    )
  ).toThrow();
});

test("should throw with too many ips", () => {
  expect(() =>
    schemaValidator.assert(
      {
        nameserver: "ns1.xn--yla.ro",
        ips: "192.168.0.1,192.168.0.2,192.168.0.3"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid ips", () => {
  expect(() =>
    schemaValidator.assert(
      {
        nameserver: "ns1.xn--yla.ro",
        ips: "192.168.0.a"
      },
      schema
    )
  ).toThrow();
});

test("should return undefined", () => {
  expect(
    schemaValidator.assert(
      {
        nameserver: "ns1.xn--yla.ro",
        ips: "192.168.0.1"
      },
      schema
    )
  ).toBeUndefined();
});
