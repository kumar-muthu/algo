class Node {
    left;
    right;
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
  
  const isBalanced = (root) => {
    const leftCount = count(root.left)
    const rightCount = count(root.right)
    console.log(`leftCount ${leftCount}; rightCount ${rightCount}`)
    return leftCount === rightCount
  }
  
  const count = (node) => {
    if(!node) {
      return 0
    }
    
    return 1 + Math.max(count(node.left), count(node.right))
  }
  
  const result = isBalanced(root)
  console.log(result)