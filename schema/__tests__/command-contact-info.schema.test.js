const schemaValidator = require("../../schemaValidator");
const schema = require("../command-contact-info.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert()).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => schemaValidator.assert({})).toThrow();
});

test("should throw on invalid argument", () => {
  expect(() => schemaValidator.assert(["registrantid"], schema)).toThrow();
});

test("should throw with invalid registrant id variable type", () => {
  expect(() => schemaValidator.assert({ cid: 2 }, schema)).toThrow();
});

test("should throw without empty registrant id ", () => {
  expect(() => schemaValidator.assert({ cid: "" }, schema)).toThrow();
});
