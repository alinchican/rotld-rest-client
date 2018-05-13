const pollAck = require("../poll-ack");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(pollAck()).rejects.toBeInstanceOf(TypeError);
});
