import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
const person = {
  isActive: true,
  age: 32,
};

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});

const incomingHttpHeaders: { [key: string]: string | string[] | undefined } = {
  authorization: "ApiKey hello123",
};
const incomingHttpHeadersWrong: {
  [key: string]: string | string[] | undefined;
} = {};
const incomingHttpHeadersWrongShort: {
  [key: string]: string | string[] | undefined;
} = {
  authorization: "ApiKey",
};
test("get Api Key", () => {
  expect(getAPIKey(incomingHttpHeaders)).toBe("hello123");
});
test("get Api key wrong", () => {
  expect(getAPIKey(incomingHttpHeadersWrong)).toBe(nulllllll);
});
test("check for misisng Api key", () => {
  expect(getAPIKey(incomingHttpHeadersWrongShort)).toBe(null);
});
/*
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})*/
