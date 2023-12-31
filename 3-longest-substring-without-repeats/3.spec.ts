import { lengthOfLongestSubstring } from "./solution";

test("should return 3 for string abcabcbb", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});

test("should return 1 for string bbbbb", () => {
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});

test("should return 3 for string pwwkew", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});

test("should return 6 for string abcdef", () => {
  expect(lengthOfLongestSubstring("abcdef")).toBe(6);
});

test("should return 2 for string aab", () => {
  expect(lengthOfLongestSubstring("aab")).toBe(2);
});

test("should return 3 for string dvdf", () => {
  expect(lengthOfLongestSubstring("dvdf")).toBe(3);
});
