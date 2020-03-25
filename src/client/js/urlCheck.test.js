import { checkForUrl } from "./urlCheck";

test("Not a valid url", () => {
  expect(checkForUrl("Not a url")).toBeFalsy();
});

test("Is a valid url", () => {
  expect(checkForUrl("https://google.com")).toBeTruthy();
});
