const domainDSdataAdd = require("../domain-dsdata-add");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(domainDSdataAdd()).rejects.toBeInstanceOf(TypeError);
});
