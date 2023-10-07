import { lengthOfLongestSubstring } from "./solution";

test("should return 3 for string abcabcdd", () => {
  expect(lengthOfLongestSubstring("abcabcdd")).toBe(3);
});

test("should return 1 for string bbbbb", () => {
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});

test("should return 3 for string pwwkew", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});

export {};
