const getRoTLDPersonTypeName = require("../getRoTLDPersonTypeName");

test("should throw without argument", () => {
  expect(() => getRoTLDPersonTypeName()).toThrow();
});

test("should throw without empty argument", () => {
  expect(() => getRoTLDPersonTypeName("")).toThrow();
});

test("should throw on invalid person type", () => {
  expect(() => getRoTLDPersonTypeName("pix")).toThrow();
});

test("should return name with valid person type", () => {
  expect(getRoTLDPersonTypeName("pi")).toBe("public institution");
});
