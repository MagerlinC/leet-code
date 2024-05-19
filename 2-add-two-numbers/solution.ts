export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  public toString = () => {
    return this.val;
  };
}

const rev = (s: string) => {
  return s.split("").reverse().join("");
};

const getNumberFromListNode = (input: ListNode | null) => {
  let numAsString = "";
  let currentNode = input;
  while (currentNode) {
    numAsString += currentNode.val;
    currentNode = currentNode.next;
  }
  return parseInt(rev(numAsString));
};

export const buildLinkedList = (values: number[]): ListNode => {
  if (values.length === 1) {
    return new ListNode(values[0]);
  }
  const nextList = values.slice(1, values.length);
  return new ListNode(values[0], buildLinkedList(nextList));
};

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let numA = getNumberFromListNode(l1);
  let numB = getNumberFromListNode(l2);
  const sum = numA + numB;
  const sumDigitsReversed = sum
    .toString()
    .split("")
    .reverse()
    .map((x) => parseInt(x));
  console.log(sum.toString().split(""));
  return buildLinkedList(sumDigitsReversed);
}
