const hello = require("../hello");

test("should resolve", () => {
  expect.assertions(1);
  return expect(hello()).resolves.toEqual(["hello"]);
});
