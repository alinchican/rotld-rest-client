const schemaValidator = require("../../schemaValidator");
const schema = require("../command-contact-create.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => schemaValidator.assert({})).toThrow();
});

test("should throw on invalid argument (wrong type)", () => {
  expect(() => schemaValidator.assert([2], schema)).toThrow();
});

test("should throw with invalid name (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: 1,
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw without name", () => {
  expect(() =>
    schemaValidator.assert(
      {
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid name (wrong length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "s",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid name (invalid characters)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro™",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid address1 (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: ["Test address"],
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw without address1", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with empty address1", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid address1 (wrong length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus, est at laoreet tempus, turpis leo interdum quam, et sed..",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid city (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: ["Bucharest"],
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw without city", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with empty city", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid city (wrong length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Buchareeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid postal_code (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        postal_code: 23232,
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid postal_code (wrong length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        postal_code: "teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid address2 (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        address2: ["Test address"],
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid address2 (wrong length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        address2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus, est at laoreet tempus, turpis leo interdum quam, et sed..",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid address3 (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        address3: ["Test address"],
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid address3 (wrong length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        address3:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus, est at laoreet tempus, turpis leo interdum quam, et sed..",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid state_province (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: ["Bucharest"],
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw without state_province", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with empty state_province", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid state_province (max length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus, est at laoreet tempus, turpis leo interdum quam, et sed..",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid country_code (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: ["RO"],
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw without country_code", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with empty country_code", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid country_code (wrong length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "ROU",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid country_code (non-existent option)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "XX",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid phone (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: ["+40.755555555"],
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw without phone", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with empty phone", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid phone (wrong format)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "0755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid fax (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        pfax: ["+40.755555555"],
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid fax (wrong format)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        fax: "0755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid email (wrong type)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: ["contact@xn--yla.ro"],
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw without email", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with empty email", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid email (wrong length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email:
          "contaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid email (wrong format)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "ș.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact.ro",
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
        name: "xn--yla.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: ["o", "c"],
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
        name: "xn--yla.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
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
        name: "xn--yla.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
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
        name: "xn--yla.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
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
        name: "xn--yla.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: ["noway", "100000000000000"]
      },
      schema
    )
  ).toThrow();
});

test("should throw without cnp_fiscal_code (country is RO)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "xn--yla.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o"
      },
      schema
    )
  ).toThrow();
});

test("should not throw without cnp_fiscal_code (country is not RO)", () => {
  expect(
    schemaValidator.assert(
      {
        name: "xn--yla.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "US",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
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
        name: "xn--yla.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
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
        name: "xn--yla.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
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
        name: "xn--yla.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway",
        registration_number: ["xxx"]
      },
      schema
    )
  ).toThrow();
});

test("should throw without registration_number (country is RO, person_type is c)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        name: "xn--yla.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "c",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toThrow();
});

test("shouldn't throw without registration_number (country is RO, person_type is not c)", () => {
  expect(
    schemaValidator.assert(
      {
        name: "xn--yla.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "o",
        cnp_fiscal_code: "noway"
      },
      schema
    )
  ).toBeUndefined();
});

test("shouldn't throw without registration_number (country_code is not RO)", () => {
  expect(
    schemaValidator.assert(
      {
        name: "xn--yla.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "US",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
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
        name: "xn--yla.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
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
        name: "xn--yla.ro",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro",
        person_type: "c",
        cnp_fiscal_code: "noway",
        registration_number: ""
      },
      schema
    )
  ).toThrow();
});
