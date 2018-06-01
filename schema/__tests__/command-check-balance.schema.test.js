const schemaValidator = require("../../schemaValidator");
const schema = require("../command-check-balance.schema");

test("should throw on invalid argument (wrong type)", () => {
  expect(() => schemaValidator.assert([2], schema)).toThrow();
});

test("should return undefined without argument", () => {
  expect(schemaValidator.assert(undefined, schema)).toBeUndefined();
});

test("should return undefined with empty argument", () => {
  expect(schemaValidator.assert({}, schema)).toBeUndefined();
});

test("should return undefined", () => {
  expect(schemaValidator.assert({ registrar_id: 2 }, schema)).toBeUndefined();
});

test("should throw with invalid registrar_id (not integer)", () => {
  expect(() => schemaValidator.assert({ registrar_id: 2.2 }, schema)).toThrow();
});

test("should throw with invalid registrar_id (wrong type)", () => {
  expect(() =>
    schemaValidator.assert({ registrar_id: "test" }, schema)
  ).toThrow();
});
