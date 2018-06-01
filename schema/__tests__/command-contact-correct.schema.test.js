const schemaValidator = require("../../schemaValidator");
const schema = require("../command-contact-correct.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => schemaValidator.assert({}, schema)).toThrow();
});

test("should throw on invalid argument (wrong type)", () => {
  expect(() => schemaValidator.assert([2], schema)).toThrow();
});

test("should throw with invalid cid (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: ["cid"],
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw without cid", () => {
  expect(() =>
    schemaValidator.assert(
      {
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with empty cid", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid person_type (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "ci",
        person_type: ["o"],
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw without person_type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "ci",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with empty person_type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "ci",
        person_type: "",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid person_type (non-existent option)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "ci",
        person_type: "n",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid cnp_fiscal_code (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "ci",
        person_type: "o",
        cnp_fiscal_code: ["noway", "100000000000000"]
      },
      schema
    )
  ).toThrow();
});

test("should not throw without cnp_fiscal_code", () => {
  expect(
    schemaValidator.assert(
      {
        cid: "ci",
        person_type: "o"
      },
      schema
    )
  ).toBeUndefined();
});

test("should throw with invalid cnp_fiscal_code (min length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "ci",
        person_type: "o",
        cnp_fiscal_code: "no"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid cnp_fiscal_code (max length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "ci",
        person_type: "o",
        cnp_fiscal_code: "noooooooooooooooooooooooooooooooooooooway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid registration_number (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "ci",
        person_type: "o",
        cnp_fiscal_code: "noway",
        registration_number: ["xxx"]
      },
      schema
    )
  ).toThrow();
});

test("shouldn't throw without registration_number", () => {
  expect(
    schemaValidator.assert(
      {
        cid: "ci",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toBeUndefined();
});

test("should throw with invalid registration_number (max length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "ci",
        person_type: "o",
        cnp_fiscal_code: "noway",
        registration_number: "noooooooooooooooooooooooooooooooooooooooooooooway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with empty registration_number", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "ci",
        person_type: "c",
        cnp_fiscal_code: "noway",
        registration_number: ""
      },
      schema
    )
  ).toThrow();
});
