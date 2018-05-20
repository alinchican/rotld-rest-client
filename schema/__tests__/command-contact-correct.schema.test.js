const schemaValidator = require("../../schemaValidator");
const schema = require("../command-contact-correct.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert(undefined, schema)).toThrow();
});
