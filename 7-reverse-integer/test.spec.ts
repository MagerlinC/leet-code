import { reverse } from "./solution";

test("Reverse 123 should return 321", () => {
  const input = 123;
  const expected = 321;
  expect(reverse(input)).toBe(expected);
});

test("Reverse -123 should return -321", () => {
  const input = -123;
  const expected = -321;
  expect(reverse(input)).toBe(expected);
});

test("Reverse 120 should return 21", () => {
  const input = 120;
  const expected = 21;
  expect(reverse(input)).toBe(expected);
});
