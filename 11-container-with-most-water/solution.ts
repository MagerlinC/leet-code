export function maxArea(height: number[]): number {
  return optimizedSolution(height);
}

const naiveSolution = (heights: number[]) => {
  let largestArea = -Infinity;
  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const maxHeightOfArea = Math.min(heights[i], heights[j]);
      const distance = j - i;
      const area = maxHeightOfArea * distance;
      if (area > largestArea) {
        largestArea = area;
      }
    }
  }
  return largestArea;
};

const memoizationMap = new Map<string, number>();
const optimizedSolution = (heights: number[]) => {
  let largestArea = -Infinity;
  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      let area = -Infinity;
      const memoVal = memoizationMap.get(`${i}-${j}`);
      if (memoVal != null) {
        area = memoVal;
      } else {
        const maxHeightOfArea = Math.min(heights[i], heights[j]);
        const distance = j - i;
        area = maxHeightOfArea * distance;
        memoizationMap.set(`${i}-${j}`, area);
      }
      if (area > largestArea) {
        largestArea = area;
      }
    }
  }
  return largestArea;
};
