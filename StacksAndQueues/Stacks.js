class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var node = new Node(val);
        if(this.size === 0) { this.first = node; this.last = node;}
        else{
            var temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
        this.size++;
        return this;
    }
    pop(){
        if(this.size === 0){ return null}
        var temp = this.first;
        if(this.size === 1) { this.first = null; this.last = null;}
        else{
            this.first = temp.next;    
        }
        this.size--;
        return this;
    }
}

var stack = new Stack();
stack.push(10).push(20).push(30).push(40);
stack.pop();
console.log(stack);