class Node {
    left;
    right;
    value;
    constructor(val) {
      this.value = val;
    }
}
  

//         5
//     2        7
//  1     3   6   8

const root = new Node(5)
const two = new Node(2)
two.left = new Node(1)
two.right = new Node(3)
const seven = new Node(7)
seven.left = new Node(6)
seven.right = new Node(9)
// seven.right.right = new Node(10)

root.left = two
root.right = seven

const createLinkedList = (root) => {
  const hash = {}
  const queue = []
  queue.push({node: root, level: 0})
  while(queue.length > 0) {
    const ele = queue.shift()
    if(!ele.node) {
      continue;
    }
    if(!hash[ele.level]) {
      hash[ele.level] = [ele.node.value]
    } else {
      hash[ele.level].push(ele.node.value)
    }

    queue.push({node: ele.node.left, level: ele.level + 1})
    queue.push({node: ele.node.right, level: ele.level + 1})
  }
  return hash

}

const result = createLinkedList(root)
console.log(result)