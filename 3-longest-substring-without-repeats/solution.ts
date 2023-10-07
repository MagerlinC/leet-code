export function lengthOfLongestSubstring(s: string): number {
  let solution = "";
  let longestSubstring = -1;
  s.split("").forEach((character) => {
    if (!solution.includes(character)) {
      solution += character;
    } else {
      if (longestSubstring < solution.length) {
        longestSubstring = solution.length;
      }
      solution = character;
    }
  });

  return longestSubstring;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
