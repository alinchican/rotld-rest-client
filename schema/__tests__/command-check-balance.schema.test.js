const schemaValidator = require("../../schemaValidator");
const schema = require("../command-check-balance.schema");

test("should return undefined without argument", () => {
  expect(schemaValidator.assert(undefined, schema)).toBeUndefined();
});

test("should throw on invalid argument", () => {
  expect(() => schemaValidator.assert([2], schema)).toThrow();
});

test("should throw with invalid registrar id integer", () => {
  expect(() => schemaValidator.assert({ registrar_id: 2.2 }, schema)).toThrow();
});

test("should throw with invalid registrar id variable type", () => {
  expect(() =>
    schemaValidator.assert({ registrar_id: "test" }, schema)
  ).toThrow();
});

test("should return true with valid registrar id", () => {
  expect(schemaValidator.assert({ registrar_id: 2 }, schema)).toBeUndefined();
});

test("should return undefined without registrar id", () => {
  expect(schemaValidator.assert({}, schema)).toBeUndefined();
});
