const clampResult = (x: number) => {
  if (x > Math.pow(2, 31) || x < Math.pow(-2, 31)) {
    return 0;
  }
  return x;
};

export function reverse(x: number): number {
  const isNegative = x < 0;
  const numAsString = x.toString().replace("-", "");
  const reversedNumberString = numAsString.split("").reverse().join("");
  const result = isNegative
    ? -parseInt(reversedNumberString)
    : parseInt(reversedNumberString);

  return clampResult(result);
}
