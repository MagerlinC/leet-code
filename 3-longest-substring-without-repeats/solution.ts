export function lengthOfLongestSubstring(s: string): number {
  let solution = new Map<string, boolean>();
  let longestSubstring = 0;

  s.split("").forEach((character) => {
    if (!solution.has(character)) {
      solution.set(character, true);
    } else {
      if (longestSubstring < solution.size) {
        longestSubstring = solution.size;
      }
      solution = new Map<string, boolean>();
      solution.set(character, true);
    }
  });

  return longestSubstring || solution.size;
}
