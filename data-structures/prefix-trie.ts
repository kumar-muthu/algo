// Completed

export class PrefixTrie {
    root = new TrieNode();
    constructor(str) {
        for (let index = 0; index < str.length; index++) {
            this.insert(str.slice(index))
        }
    }

    private insert(str) {
        let handle = this.root;
        for (let index = 0; index < str.length; index++) {
            const element = str[index];
            let keyFound = false;
            for (let j = 0; j < handle.children.length; j++) {
                const child = handle.children[j];
                if (child.key === element) {
                    keyFound = true;
                    if (index === (str.length - 1)) {
                        child.is_leaf = true;
                    }
                    handle = child;
                    break;
                }
            }

            if (!keyFound) {
                const newNode = new TrieNode();
                newNode.key = element;
                newNode.is_leaf = (index === (str.length - 1))
                handle.children.push(newNode);
                handle = newNode;
            }
        };
    }

    is_exists(str) {
        let handle = this.root;
        for (let index = 0; index < str.length; index++) {
            const element = str[index];
            let keyFound = false;
            for (let j = 0; j < handle.children.length; j++) {
                const child = handle.children[j];
                if (child.key === element) {
                    keyFound = true;
                    handle = child;
                    break;
                }
            }

            if (!keyFound) {
                return false;
            }
        }
        return true;
    }
}

class TrieNode {
    key;
    is_leaf = false;
    children: TrieNode[] = [];
    constructor() {

    }
}


const t = new PrefixTrie('hello');
console.log(t.is_exists('hello'));
console.log(t.is_exists('ello'));
console.log(t.is_exists('llo'));
console.log(t.is_exists('sam'));