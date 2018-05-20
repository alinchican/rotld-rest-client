const schemaValidator = require("../../schemaValidator");
const schema = require("../command-poll-ack.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert()).toThrow();
});

test("should throw on invalid argument", () => {
  expect(() => schemaValidator.assert(1, schema)).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => schemaValidator.assert({}, schema)).toThrow();
});

test("should throw with invalid message id variable type", () => {
  expect(() =>
    schemaValidator.assert({ message_id: [23, 34] }, schema)
  ).toThrow();
});

test("should throw with empty message id", () => {
  expect(() => schemaValidator.assert({ message_id: "" }, schema)).toThrow();
});

test("should throw with invalid message id", () => {
  expect(() =>
    schemaValidator.assert({ message_id: "invalid_messageid" }, schema)
  ).toThrow();
});

test("should return true on valid message id", () => {
  expect(
    schemaValidator.assert({ message_id: "msgbroker-5077" }, schema)
  ).toBeUndefined();
});
