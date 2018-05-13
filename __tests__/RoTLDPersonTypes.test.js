const RoTLDPersonTypes = require("../RoTLDPersonTypes");

test("should be object", () => {
  expect(Object.prototype.toString.call(RoTLDPersonTypes)).toEqual(
    "[object Object]"
  );
});

test("shouldn't be empty", () => {
  expect(!Object.keys(RoTLDPersonTypes).length).toBe(false);
});
