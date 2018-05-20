const schemaValidator = require("../../schemaValidator");
const schema = require("../command-hello.schema");

test("should throw with argument", () => {
  expect(() => schemaValidator.assert({}, schema)).toThrow();
});

test("should return undefined", () => {
  expect(schemaValidator.assert(undefined, schema)).toBeUndefined();
});
