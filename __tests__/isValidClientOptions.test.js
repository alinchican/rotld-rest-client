const isValidClientOptions = require("../isValidClientOptions");

test("should throw without argument", () => {
  expect(() => isValidClientOptions()).toThrow();
});

test("should throw with invalid argument", () => {
  expect(() => isValidClientOptions(["test", "test", "staging"])).toThrow();
});

test("should throw with empty argument", () => {
  expect(() => isValidClientOptions({})).toThrow();
});

test("should throw without username", () => {
  expect(() =>
    isValidClientOptions({
      password: "test",
      environment: "test"
    })
  ).toThrow();
});

test("should throw without password", () => {
  expect(() =>
    isValidClientOptions({
      username: "test",
      environment: "test"
    })
  ).toThrow();
});

test("should throw without environment", () => {
  expect(() =>
    isValidClientOptions({
      username: "test",
      password: "test"
    })
  ).toThrow();
});

test("should throw with invalid environment", () => {
  expect(() =>
    isValidClientOptions({
      username: "test",
      password: "test",
      environment: "stage"
    })
  ).toThrow();
});

test("should throw with invalid allow unsecure", () => {
  expect(() =>
    isValidClientOptions({
      username: "test",
      password: "test",
      environment: "stage",
      allowUnsecure: 1
    })
  ).toThrow();
});

test("should throw with invalid pre validate", () => {
  expect(() =>
    isValidClientOptions({
      username: "test",
      password: "test",
      environment: "stage",
      localValidation: 1
    })
  ).toThrow();
});

test("should throw with invalid format", () => {
  expect(() =>
    isValidClientOptions({
      username: "test",
      password: "test",
      environment: "stage",
      format: "jsonp"
    })
  ).toThrow();
});

test("should throw with invalid language", () => {
  expect(() =>
    isValidClientOptions({
      username: "test",
      password: "test",
      environment: "stage",
      language: "en_US"
    })
  ).toThrow();
});

test("should return true", () => {
  expect(
    isValidClientOptions({
      username: "test",
      password: "test",
      environment: "test",
      allowUnsecure: true,
      localValidation: true,
      format: "json",
      language: "en"
    })
  ).toBe(true);
});
