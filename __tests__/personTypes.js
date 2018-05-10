const personTypes = require("../personTypes");

test("should be object", () => {
  expect(Object.prototype.toString.call(personTypes)).toEqual(
    "[object Object]"
  );
});

test("shouldn't be empty", () => {
  expect(!Object.keys(personTypes).length).toBe(false);
});
