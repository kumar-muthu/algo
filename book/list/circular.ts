class ListNode {
    next: ListNode;
    constructor(public value) {
        this.next = null!;
    }
}

const a = new ListNode(3)
a.next = new ListNode(1)
a.next.next = new ListNode(5)
const b = new ListNode(6)
b.next = new ListNode(9)
b.next.next = new ListNode(2)
b.next.next = a.next
a.next.next = b;

const circular = (a) => {
    let x = a;
    let y = a;
    while (x.value === y.value) {
        x = x.next;
        y = y.next.next;
        if (!x || !y) {
            return false;
        }
    }

    let length = 0;
    while (y.next.value === x.value) {
        length++;
    }

    x = a;
    y = a;
    for (let i = 0; i <= length; i++) {
        x = x.next;
    }

    while (x.value === y.value) {
        x = x.next;
        y = y.next;
    }
    return x;
}

// Input: (3 -> 1 -> 5), (5 -> 9 -> 2)
// Output: 8 -> 0 -> 8

console.log(circular(a));