const getPersonTypeName = require("../getPersonTypeName");

test("should throw without argument", () => {
  expect(() => getPersonTypeName()).toThrow();
});

test("should throw without empty argument", () => {
  expect(() => getPersonTypeName("")).toThrow();
});

test("should throw on invalid person type", () => {
  expect(() => getPersonTypeName("pix")).toThrow();
});

test("should return name with valid person type", () => {
  expect(getPersonTypeName("pi")).toBe("public institution");
});
