class SetStacks {
    list: any = []
    topStack = -1;
    topPosition = -1;
    constructor(private maxDepth) {
        
    }

    push(value) {
        if(this.topPosition == -1) {
            this.list.push([])
            this.topStack++;
            this.list[this.topStack].push(value);
            this.topPosition = 0;
        } else if (this.topPosition + 1 >= this.maxDepth){
            this.topPosition  = -1;
            this.push(value);
        } else {
            this.topPosition++;
            this.list[this.topStack].push(value);
        }
    }
    pop() {
        if(this.topPosition > -1 && this.topStack > -1) {
            const value = this.list[this.topStack].pop();
            this.topPosition--;

            if(this.topPosition == -1) {
                this.list.pop();
                this.topStack--;
            }
            return value;
        } 
    }
}

const s = new SetStacks(2);

s.push(1);
s.push(2);
s.push(3);

console.log(s.list[0]);
console.log(s.list[1]);

console.log(s.pop());

console.log(s.list[0]);
console.log(s.list[1]);