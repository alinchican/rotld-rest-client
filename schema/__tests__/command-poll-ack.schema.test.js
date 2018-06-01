const schemaValidator = require("../../schemaValidator");
const schema = require("../command-poll-ack.schema");

test("should throw without argument", () => {
  expect(() => schemaValidator.assert()).toThrow();
});

test("should throw on invalid argument (wrong type)", () => {
  expect(() => schemaValidator.assert(1, schema)).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => schemaValidator.assert({}, schema)).toThrow();
});

test("should return undefined", () => {
  expect(
    schemaValidator.assert({ message_id: "msgbroker-5077" }, schema)
  ).toBeUndefined();
});

test("should throw with invalid message_id (wrong type)", () => {
  expect(() =>
    schemaValidator.assert({ message_id: [23, 34] }, schema)
  ).toThrow();
});

test("should throw with empty message_id", () => {
  expect(() => schemaValidator.assert({ message_id: "" }, schema)).toThrow();
});

test("should throw with invalid message_id (not a RoTLD alphanum", () => {
  expect(() =>
    schemaValidator.assert({ message_id: "invalid_messageid" }, schema)
  ).toThrow();
});
