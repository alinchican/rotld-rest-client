const schemaValidator = require("../../schemaValidator");
const schema = require("../command-domain-dsdata-remove.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});
