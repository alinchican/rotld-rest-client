const checkRenewalAvailability = require("../check-renewal-availability");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(checkRenewalAvailability()).rejects.toBeInstanceOf(TypeError);
});
