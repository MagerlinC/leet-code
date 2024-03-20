import { longestPalindrome } from "./solution";

test("should return bab for input babad", () => {
  const input = "babad";
  expect(longestPalindrome(input)).toBe("bab");
});

test("should return bb for input cbbd", () => {
  const input = "cbbd";
  expect(longestPalindrome(input)).toBe("bb");
});
