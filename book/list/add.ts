class ListNode {
    next: ListNode;
    constructor(public value) {
        this.next = null!;
    }
}

const a = new ListNode(3)
a.next = new ListNode(1)
a.next.next = new ListNode(5)
const b = new ListNode(5)
b.next = new ListNode(9)
b.next.next = new ListNode(2)

const addNode = (a, b, result, carry) => {
    if (!a || !b) {
        return;
    }
    const sum = (a ? a.value : 0) + (b ? b.value : 0) + carry;
    const rem = Math.floor(sum / 10)
    const part = sum % 10
    if (!result) {
        result = new ListNode(part);
    } else {
        let edge = result;
        while (edge.next) {
            edge = edge.next;
        }
        edge.next = new ListNode(part)
    }
    addNode(a ? a.next : null, b ? b.next : null, result, rem)
    return result;
}

// Input: (3 -> 1 -> 5), (5 -> 9 -> 2)
// Output: 8 -> 0 -> 8

console.log(addNode(a, b, null, 0));