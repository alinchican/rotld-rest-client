const schemaValidator = require("../schemaValidator");

const inputSchema = schemaValidator.any().forbidden();

module.exports = inputSchema;
