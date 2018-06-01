const schemaValidator = require("../../schemaValidator");
const schema = require("../command-domain-dsdata-remove.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => schemaValidator.assert({}, schema)).toThrow();
});

test("should throw on invalid argument", () => {
  expect(() => schemaValidator.assert([], schema)).toThrow();
});

test("should throw with invalid domain variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: ["xn--yla.ro"],
        keytag: 65534,
        alg: 3,
        digest_type: 1,
        digest: "1111111111111111111111111111111111111111"
      },
      schema
    )
  ).toThrow();
});

test("should throw without domain", () => {
  expect(() =>
    schemaValidator.assert(
      {
        keytag: 65534,
        alg: 3,
        digest_type: 1,
        digest: "1111111111111111111111111111111111111111"
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
        keytag: 65534,
        alg: 3,
        digest_type: 1,
        digest: "1111111111111111111111111111111111111111"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid keytag variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        keytag: ["65534"],
        alg: 3,
        digest_type: 1,
        digest: "1111111111111111111111111111111111111111"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid keytag (min)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        keytag: "-66",
        alg: 3,
        digest_type: 1,
        digest: "1111111111111111111111111111111111111111"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid keytag (max)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        keytag: "66536",
        alg: 3,
        digest_type: 1,
        digest: "1111111111111111111111111111111111111111"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid alg variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        keytag: "65534",
        alg: [16],
        digest_type: 1,
        digest: "1111111111111111111111111111111111111111"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid alg", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        keytag: "66534",
        alg: 16,
        digest_type: 1,
        digest: "1111111111111111111111111111111111111111"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid digest type variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        keytag: "66534",
        alg: 16,
        digest_type: [1],
        digest: "1111111111111111111111111111111111111111"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid digest type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        keytag: "66534",
        alg: 16,
        digest_type: 3,
        digest: "1111111111111111111111111111111111111111"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid digest length (max, digest_type 1)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        keytag: "66534",
        alg: 16,
        digest_type: 3,
        digest: "11111111111111111111111111111111111111111"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid digest length (min, digest_type 1)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        keytag: "66534",
        alg: 16,
        digest_type: 3,
        digest: "1111111111111111111111111111111111111"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid digest length (max, digest_type 2)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        keytag: "66534",
        alg: 16,
        digest_type: 3,
        digest:
          "11111111111111111111111111111111111111111111111111111111111111111111111111111111"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid digest length (min, digest_type 2)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        domain: "xn--yla.ro",
        keytag: "66534",
        alg: 16,
        digest_type: 3,
        digest: "1111111111111111111111111111111111111"
      },
      schema
    )
  ).toThrow();
});

test("should return undefined", () => {
  expect(
    schemaValidator.assert(
      {
        domain: "xn--yla.ro"
      },
      schema
    )
  ).toBeUndefined();
});
