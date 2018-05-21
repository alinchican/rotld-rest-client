const schemaValidator = require("../../schemaValidator");
const schema = require("../command-contact-update.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => schemaValidator.assert({}, schema)).toThrow();
});

test("should throw with invalid cid variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: ["cid"],
        address1: ["Test address"],
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw without cid", () => {
  expect(() =>
    schemaValidator.assert(
      {
        address1: ["Test address"],
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
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
        address1: ["Test address"],
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid address1 variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: ["Test address"],
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw without address1", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with empty address1", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid address1 (length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus, est at laoreet tempus, turpis leo interdum quam, et sed..",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid address2 variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        address2: ["Test address"],
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid address2 (length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        address2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus, est at laoreet tempus, turpis leo interdum quam, et sed..",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid address3 variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        address3: ["Test address"],
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid address3 (length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        address3:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus, est at laoreet tempus, turpis leo interdum quam, et sed..",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid city variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: ["Bucharest"],
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw without city", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with empty city", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid city (length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Buchareeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid postal code variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        postal_code: 23232,
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid postal code (length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        postal_code: "teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid state province variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: ["Bucharest"],
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw without state province", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with empty state province", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid state province length (max)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus, est at laoreet tempus, turpis leo interdum quam, et sed..",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid country code variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: ["RO"],
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw without country code", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with empty country code", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid country code (length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "ROU",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid country code (country)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "XX",
        phone: "+40.755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid phone variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: ["+40.755555555"],
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw without phone", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with empty phone", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid phone (phone number format)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "0755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid fax variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        pfax: ["+40.755555555"],
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid fax (phone number format)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        fax: "0755555555",
        email: "contact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid email variable type", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: ["contact@xn--yla.ro"]
      },
      schema
    )
  ).toThrow();
});

test("should throw without email", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555"
      },
      schema
    )
  ).toThrow();
});

test("should throw with empty email", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: ""
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid email (length)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email:
          "contaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaact@xn--yla.ro"
      },
      schema
    )
  ).toThrow();
});

test("should throw with invalid email (email format)", () => {
  expect(() =>
    schemaValidator.assert(
      {
        cid: "cid",
        address1: "Test address",
        city: "Bucharest",
        state_province: "Bucharest",
        country_code: "RO",
        phone: "+40.755555555",
        email: "contact.ro"
      },
      schema
    )
  ).toThrow();
});
