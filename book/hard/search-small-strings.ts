// completed
import {PrefixTrie} from '../../data-structures/prefix-trie'
const search = (main, arr) => {
  const t = new PrefixTrie(main);

  for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      console.log(`${element} - ${t.is_exists(element)}`);
  }
}

const data = ['hello', 'wo', 'orld', 'sam', 'o'];

search('helloworld', data);