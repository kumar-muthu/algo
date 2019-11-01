class Node {
    left;
    right;
    value;
    parent;
    constructor(val, parent) {
      this.value = val;
      this.parent = parent;
    }
}
  

//         5
//     2        7
//  1     3   6   8
//                  10
let ten, six;
const root = new Node(5, null)
const two = new Node(2, root)
two.left = new Node(1, two)
two.right = new Node(3, two)
const seven = new Node(7, root)
seven.left = six = new Node(6, seven)
seven.right = new Node(9, seven)
seven.right.right = ten = new Node(10)

root.left = two
root.right = seven

//two.right.left = new Node(123, two)

const checkSubtree = (n1, n2) => {
   if(!n1 || !n2) {
    return false
  }
  console.log(`n1 ${n1.value}, n2 ${n2.value}`)
  if(isSame(n1, n2)) {
    return true
  }
  
  return (n1 && checkSubtree(n1.left, n2)) || (n1 &&checkSubtree(n1.right, n2))
}

const isSame = (a, b) => {
  if(!a && !b) {
    return true
  }
  if(!a || !b) {
    return false
  }
  
  if(a.value === b.value && isSame(a.left, b.left) && isSame(a.right, b.right)) {
    return true
  } else {
    return false
  }
}

const result = checkSubtree(root, new Node(6, null))
console.log(result) // 7