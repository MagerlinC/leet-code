import { ListNode, addTwoNumbers, buildLinkedList } from "./solution";

test("addTwoNumbers returns [7,0,8] for input [2,4,3] and [5,6,4]", () => {
  const inputA = new ListNode(2, new ListNode(4, new ListNode(3)));
  const inputB = new ListNode(5, new ListNode(6, new ListNode(4)));
  const expected = new ListNode(7, new ListNode(0, new ListNode(8)));
  expect(addTwoNumbers(inputA, inputB)?.toString()).toEqual(
    expected.toString()
  );
});

test("addTwoNumbers returns [0] for input [0] and [0]", () => {
  const inputA = new ListNode(0);
  const inputB = new ListNode(0);
  const expected = new ListNode(0);
  expect(addTwoNumbers(inputA, inputB)?.toString()).toEqual(
    expected.toString()
  );
});

test("addTwoNumbers returns [8,9,9,9,0,0,0,1] for input [9,9,9,9,9,9,9] and [9,9,9,9]", () => {
  const inputA = buildLinkedList([9, 9, 9, 9, 9, 9, 9]);
  const inputB = buildLinkedList([9, 9, 9, 9]);
  const expected = buildLinkedList([8, 9, 9, 9, 0, 0, 0, 1]);
  expect(addTwoNumbers(inputA, inputB)?.toString()).toEqual(
    expected.toString()
  );
});

test("addTwoNumbers returns [7, 0, 4, 0, 1] for input [2,4,9] and [5,6,4,9]", () => {
  const inputA = buildLinkedList([2, 4, 9]);
  const inputB = buildLinkedList([5, 6, 4, 9]);
  const expected = buildLinkedList([7, 0, 4, 0, 1]);
  expect(addTwoNumbers(inputA, inputB)?.toString()).toEqual(
    expected.toString()
  );
});

test("addTwoNumbers returns [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] for input [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] and [5,6,4]", () => {
  const inputA = buildLinkedList([
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1,
  ]);
  const inputB = buildLinkedList([5, 6, 4]);
  const expected = buildLinkedList([
    6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1,
  ]);
  expect(addTwoNumbers(inputA, inputB)?.toString()).toEqual(
    expected.toString()
  );
});
