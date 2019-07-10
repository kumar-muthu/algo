// completed
import {
    Trie
} from '../../data-structures/trie';

const longest = (words) => {
    const t = new Trie();
    words.forEach(element => {
        t.insert(element);
    });

    let sortedWords = words.sort((x, y) => x.length < y.length);
    for (let index = 0; index < sortedWords.length; index++) {
        const element = sortedWords[index];
        for (let index = 1; index < element.length; index++) {
            const first = element.slice(0, index);
            const second = element.slice(index);
            if (t.is_exists(first) && t.is_exists(second)) {
                return element;
            }
        }
    }
    return false;
}

const arr = ['hello', 'world', 'helloworld', 'helloworldprogram', 'program'];

console.log(longest(arr));