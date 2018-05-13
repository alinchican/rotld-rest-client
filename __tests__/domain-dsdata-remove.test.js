const domainDSdataRemove = require("../domain-dsdata-remove");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(domainDSdataRemove()).rejects.toBeInstanceOf(TypeError);
});
