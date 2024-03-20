const memoMap = new Map<string, number[][]>();

const arrayToKey = (nums: number[], size: number) =>
  size.toString() + nums.join(",");

const memoizedGetSubArraysOfSize = (nums: number[], size: number) => {
  const key = arrayToKey(nums, size);
  const memoizedValue = memoMap.get(key);
  if (memoizedValue) {
    console.log(`Memoized utilized for sub-arrays of ${size}`);
    return memoizedValue;
  } else {
    const res = getSubArraysOfSize(nums, size);
    memoMap.set(key, res);
    return res;
  }
};

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
    const curSubArrays = memoizedGetSubArraysOfSize(nums, i);
    const validSubArrs = curSubArrays.filter(
      (subArr) => new Set(subArr).size === k
    );
    solutions = solutions.concat(validSubArrs);
  }
  return solutions.length;
}
