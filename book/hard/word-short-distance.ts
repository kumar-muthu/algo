// Completed
const distance = (str, w1, w2) => {
    const words= str.split(' ');
    let i: any = null, j: any = null, min = Infinity;
    for (let index = 0; index < words.length; index++) {
        const element = words[index];
        if(element === w1) {
            i = index;

            if(j != null && min > (i - j)) {
                min = i - j;
            }
        }

        if(element === w2) {
            j = index;

            if(i !=null && min > (j - i)) {
                min = j - i;
            }
        }
    }
    return min;
}

const str = "sam is simply dummy text of the printing and typesetting ram Lorem ram has sam the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
console.log(distance(str, 'sam', 'ram'));