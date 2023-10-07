export function lengthOfLongestSubstring(s: string): number {
  let curSolution = "";
  let longestSubstring = 0;

  s.split("").forEach((character) => {
    if (!curSolution.includes(character)) {
      curSolution += character;
    } else {
      if (longestSubstring < curSolution.length) {
        longestSubstring = curSolution.length;
      }
      const charIndex = curSolution.indexOf(character);
      curSolution = curSolution.slice(charIndex + 1) + character;
    }
  });

  return Math.max(longestSubstring, curSolution.length);
}
