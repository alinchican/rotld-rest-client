const schemaValidator = require("../../schemaValidator");
const schema = require("../command-domain-dsdata-remove.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => schemaValidator.assert({}, schema)).toThrow();
});

test("should throw on invalid argument (wrong type)", () => {
  expect(() => schemaValidator.assert([], schema)).toThrow();
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

test("should throw with invalid domain (wrong type)", () => {
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

test("should throw with invalid domain (non-ascii)", () => {
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

test("should throw with invalid keytag (wrong type)", () => {
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

test("should throw with invalid keytag (min length)", () => {
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

test("should throw with invalid keytag (max length)", () => {
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

test("should throw with invalid alg (wrong type)", () => {
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

test("should throw with invalid alg (non-existent option)", () => {
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

test("should throw with invalid digest_type (wrong type)", () => {
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

test("should throw with invalid digest_type", () => {
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

test("should throw with invalid digest (max length, digest_type is 1)", () => {
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

test("should throw with invalid digest (min length, digest_type is 1)", () => {
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

test("should throw with invalid digest (max length, digest_type is 2)", () => {
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

test("should throw with invalid digest (min length, digest_type is 2)", () => {
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
