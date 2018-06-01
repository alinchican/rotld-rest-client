const schemaValidator = require("../../schemaValidator");
const schema = require("../command-contact-update.schema");

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

test("should throw with invalid address1 (wrong type)", () => {
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

test("should throw with invalid address1 (wrong length)", () => {
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

test("should throw with invalid address2 (wrong type)", () => {
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

test("should throw with invalid address2 (wrong length)", () => {
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

test("should throw with invalid address3 (wrong type)", () => {
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

test("should throw with invalid address3 (wrong length)", () => {
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

test("should throw with invalid city (wrong type)", () => {
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

test("should throw with invalid city (wrong length)", () => {
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

test("should throw with invalid postal code (wrong type)", () => {
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

test("should throw with invalid postal code (wrong length)", () => {
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

test("should throw with invalid state_province (wrong type)", () => {
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

test("should throw without state_province", () => {
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

test("should throw with empty state_province", () => {
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

test("should throw with invalid state_province length (max length)", () => {
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

test("should throw with invalid country_code (wrong type)", () => {
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

test("should throw without country_code", () => {
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

test("should throw with empty country_code", () => {
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

test("should throw with invalid country_code (wrong length)", () => {
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

test("should throw with invalid country_code (non-existent option)", () => {
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

test("should throw with invalid phone (wrong type)", () => {
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

test("should throw with invalid phone (wrong format)", () => {
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

test("should throw with invalid fax (wrong type)", () => {
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

test("should throw with invalid fax (wrong format)", () => {
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

test("should throw with invalid email (wrong type)", () => {
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

test("should throw with invalid email (wrong length)", () => {
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

test("should throw with invalid email (wrong format)", () => {
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
