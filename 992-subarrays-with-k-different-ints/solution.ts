const getSubArraysOfSize = (nums: number[], size: number) => {
  if (size === nums.length) {
    return [nums];
  }
  const subArrs: number[][] = [];
  for (let i = 0; i + size <= nums.length; i++) {
    subArrs.push(nums.slice(i, i + size));
  }
  return subArrs;
};

export function subarraysWithKDistinct(nums: number[], k: number): number {
  let solutions: number[][] = [];
  for (let i = k; i <= nums.length; i++) {
    const curSubArrays = getSubArraysOfSize(nums, i);
    const validSubArrs = curSubArrays.filter(
      (subArr) => new Set(subArr).size === k
    );
    solutions = solutions.concat(validSubArrs);
  }
  return solutions.length;
}
