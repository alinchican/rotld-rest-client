const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator.object().keys({
  // registrar_id[integer] [optional]: registrar id
  registrar_id: schemaValidator.number().integer()
});

module.exports = inputSchema;
