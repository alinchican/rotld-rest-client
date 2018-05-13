const RoTLDCountryCodes = require("../RoTLDCountryCodes");

test("should be object", () => {
  expect(Object.prototype.toString.call(RoTLDCountryCodes)).toEqual(
    "[object Object]"
  );
});

test("shouldn't be empty", () => {
  expect(!Object.keys(RoTLDCountryCodes).length).toBe(false);
});
