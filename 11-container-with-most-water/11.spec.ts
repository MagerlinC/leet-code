import { maxArea } from "./solution";

test("should return 49 for example", () => {
  const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  expect(maxArea(input)).toBe(49);
});

test("should return 16 for test case", () => {
  const input = [4, 3, 2, 1, 4];
  expect(maxArea(input)).toBe(16);
});

test("should return 1 for test case 1,1", () => {
  const input = [1, 1];
  expect(maxArea(input)).toBe(1);
});
