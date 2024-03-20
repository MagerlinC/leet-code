const palindromeMap = new Map<string, boolean>();

const isPalindrome = (s: string) => {
  let lo = 0;
  let hi = s.length - 1;
  while (lo < hi) {
    if (s[lo] !== s[hi]) {
      return false;
    }
    lo++;
    hi--;
  }
  return true;
};

const memoizedIsPalindrome = (s: string) => {
  if (palindromeMap.has(s)) {
    return palindromeMap.get(s);
  } else {
    const isPal = isPalindrome(s);
    palindromeMap.set(s, isPal);
    return isPalindrome;
  }
};

export function longestPalindrome(s: string): string {
  let bestSolution = "";
  const chars = s.split("");
  for (let i = 0; i < chars.length; i++) {
    let currentString = "";
    for (let j = i; j < chars.length; j++) {
      currentString += chars[j];
      if (
        currentString.length > bestSolution.length &&
        memoizedIsPalindrome(currentString)
      ) {
        bestSolution = currentString;
      }
    }
  }
  return bestSolution;
}
