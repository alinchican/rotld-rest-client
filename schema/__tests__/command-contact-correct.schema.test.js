const schemaValidator = require("../../schemaValidator");
const schema = require("../command-contact-correct.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw with invalid cid variable type", () => {
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

test("should throw with invalid person type variable type", () => {
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

test("should throw without person type", () => {
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

test("should throw with empty person type", () => {
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

test("should throw with invalid person type", () => {
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

test("should throw with invalid cnp fiscal code variable type", () => {
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

test("should not throw without cnp fiscal code", () => {
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

test("should throw with invalid cnp fiscal code length (min)", () => {
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

test("should throw with invalid cnp fiscal code length (max)", () => {
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

test("should throw with invalid registration number variable type", () => {
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

test("shouldn't throw without registration number", () => {
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

test("should throw with invalid registration number length (max)", () => {
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

test("should throw with empty registration number", () => {
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
