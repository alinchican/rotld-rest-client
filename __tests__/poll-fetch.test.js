const pollFetch = require("../poll-fetch");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(pollFetch()).rejects.toBeInstanceOf(TypeError);
});
