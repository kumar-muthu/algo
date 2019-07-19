const remove = (str: string) => {
  for (let i = str.length - 1; i >= 1; i--) {
      if(str[i] === str[i-1]) {
            str = str.slice(0, i) + str.slice(i+1, str.length);
      }
  }
  return str;
}

console.log(remove('aaaabaaabx'))