const schemaValidator = require("../../schemaValidator");
const schema = require("../command-contact-create.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw with invalid name variable type", () => {
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

test("should throw with invalid name (length)", () => {
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

test("should throw with name (invalid characters)", () => {
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

test("should throw with invalid address1 variable type", () => {
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

test("should throw with invalid address1 (length)", () => {
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

test("should throw with invalid address2 variable type", () => {
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

test("should throw with invalid address2 (length)", () => {
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

test("should throw with invalid address3 variable type", () => {
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

test("should throw with invalid address3 (length)", () => {
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

test("should throw with invalid state province variable type", () => {
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

test("should throw without state province", () => {
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

test("should throw with empty state province", () => {
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

test("should throw with invalid state province length (max)", () => {
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

test("should throw with invalid country code variable type", () => {
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

test("should throw without country code", () => {
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

test("should throw with empty country code", () => {
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

test("should throw with invalid country code (length)", () => {
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

test("should throw with invalid country code (country)", () => {
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

test("should throw with invalid phone variable type", () => {
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

test("should throw with invalid phone (phone number format)", () => {
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

test("should throw with invalid fax variable type", () => {
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

test("should throw with invalid fax (phone number format)", () => {
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

test("should throw with invalid email variable type", () => {
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

test("should throw with invalid email (length)", () => {
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

test("should throw with invalid email (email format)", () => {
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

test("should throw with invalid person type variable type", () => {
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

test("should throw without person type", () => {
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

test("should throw with empty person type", () => {
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

test("should throw with invalid person type", () => {
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

test("should throw with invalid cnp fiscal code variable type", () => {
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

test("should throw without cnp fiscal code when country is RO", () => {
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

test("should not throw without cnp fiscal code when country is not RO", () => {
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

test("should throw with invalid cnp fiscal code length (min)", () => {
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

test("should throw with invalid cnp fiscal code length (max)", () => {
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

test("should throw with invalid registration number variable type", () => {
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

test("should throw without registration number when country code is RO and person type is c", () => {
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

test("shouldn't throw without registration number when country code is RO and person type is not c", () => {
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

test("shouldn't throw without registration number when country code is not RO", () => {
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

test("should throw with invalid registration number length (max)", () => {
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

test("should throw with empty registration number", () => {
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
