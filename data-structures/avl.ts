class AVL {
    root: NodeItem = null!;

    insert = (value) => {
        let current = this.root;
        if (this.root) {
            while (true) {
                if (current.value > value) {
                    if (current.left) {
                        current = current.left
                    } else {
                        current.left = new NodeItem(value)
                        current.left.parent = current;
                        break;
                    }
                } else {
                    if (current.right) {
                        current = current.right
                    } else {
                        current.right = new NodeItem(value)
                        current.right.parent = current;
                        break;
                    }
                }
            }
        } else {
            this.root = current = new NodeItem(value);
        }

        this.root = this.reBalance(current);
    }


    reBalance(current: NodeItem) {
        const h = this.height(current);
        let root = null;
        if (Math.abs(h) > 1) {
            this.rotate(current);
        }
        if (current.parent) {
            return this.reBalance(current.parent)
        } else {
            return current;
        }
         
    }

    rotate(current: NodeItem) {
        if (this.balanceFactor(current) > 1) {
            if (this.balanceFactor(current.left) === -1) {
                this.leftRotate(current.left);
            }
            this.rightRotate(current);
        }

        if (this.balanceFactor(current) < -1) {
            if (this.balanceFactor(current.right) === 1) {
                this.rightRotate(current.right);
            }
            this.leftRotate(current);
        }
    }

    leftRotate(root: NodeItem) {
        const pivot = root.right;
        pivot.parent = root.parent;
        if (root.parent) {
            if(root.parent.left && root.parent.left.value === root.value) {
                root.parent.left = pivot;
            } else {
                root.parent.right = pivot;
            }
        }
        root.parent = pivot;
        if (pivot.left) {
            pivot.left.parent = root;
        }

        root.right = pivot.left;
        pivot.left = root;
    }


    rightRotate(root: NodeItem) {
        const pivot = root.left;
        pivot.parent = root.parent;
        if (root.parent) {
            if(root.parent.left && root.parent.left.value === root.value) {
                root.parent.left = pivot;
            } else {
                root.parent.right = pivot;
            }
        }
        root.parent = pivot;
        if (pivot.right) {
            pivot.right.parent = root;
        }

        root.left = pivot.right;
        pivot.right = root;
    }

    // height(node) {
    //     let h = 0;
    //     if (node && (node.left || node.right)) {
    //         h = Math.max(this.height(node.left), this.height(node.right)) + 1
    //     } else {
    //         h =  0;
    //     }
    //     return h;
    // }

    height(node) {
        if (!node) {
            return 0;
        }
        const q: any = []
        q.push(node);
        let h = 0;
        let count = q.length;
        while (q.length > 0) {
            h++;
            count = q.length;
            while (count > 0) {
                const p = q.shift();
                if (p.left) {
                    q.push(p.left)
                }
                if (p.right) {
                    q.push(p.right)
                }
                count--;
            }
        }

        return h;
    }

    balanceFactor(node) {
        const b = node ? this.height(node.left) - this.height(node.right) : 0
        return b
    }

    print() {
        this.inorder(this.root);
    }

    private inorder(node: NodeItem) {
        if (node && node.value) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }
}

class NodeItem {
    left: NodeItem = null!;
    right: NodeItem = null!;
    parent: NodeItem = null!;
    value;

    constructor(_value) {
        this.value = _value;
    }
}


const tree = new AVL();
tree.insert(4);
tree.insert(1);
tree.insert(9);
tree.insert(8);
tree.insert(13);
tree.insert(14);
tree.insert(10);
tree.insert(7);
tree.insert(6);
tree.insert(11);
tree.insert(12);
tree.insert(15);
tree.insert(16);
tree.insert(17);
tree.insert(5);
tree.insert(3);
tree.insert(2);



tree.print();
console.log(tree.balanceFactor(tree.root));