const schemaValidator = require("../../schemaValidator");
const schema = require("../apiClient-options.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert("", schema)).toThrow();
});

test("should throw with invalid argument (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(["test", "test", "staging"], schema)
  ).toThrow();
});

test("should throw with empty argument", () => {
  expect(() => schemaValidator.assert({}, schema)).toThrow();
});

test("should be undefined", () => {
  expect(
    schemaValidator.assert(
      {
        username: "test",
        password: "test",
        environment: "test",
        allowUnsecure: true,
        localValidation: false,
        format: "json",
        language: "en"
      },
      schema
    )
  ).toBeUndefined();
});

test("should throw without username", () => {
  expect(() =>
    schemaValidator.assert(
      {
        password: "test",
        environment: "test"
      },
      schema
    )
  ).toThrow();
});

test("should throw without password", () => {
  expect(() =>
    schemaValidator.assert(
      {
        username: "test",
        environment: "test"
      },
      schema
    )
  ).toThrow();
});

test("should throw without environment", () => {
  expect(() =>
    schemaValidator.assert(
      {
        username: "test",
        password: "test"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid environment (non-existent option)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        username: "test",
        password: "test",
        environment: "stage"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid allowUnsecure (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        username: "test",
        password: "test",
        environment: "stage",
        allowUnsecure: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid localValidation (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        username: "test",
        password: "test",
        environment: "stage",
        localValidation: 1
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid format (non-existent option)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        username: "test",
        password: "test",
        environment: "stage",
        format: "jsonp"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid language (wrong format)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        username: "test",
        password: "test",
        environment: "stage",
        language: "en_US"
      },
      schema
    )
  ).toThrow();
});
