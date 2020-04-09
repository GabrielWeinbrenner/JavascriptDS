class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }
    push(val){
        var node = new Node(val);
        if(this.size === 0) { this.top = node; this.bottom = node;}
        else{
            var temp = this.top;
            this.top = node;
            this.top.next = temp;
        }
        this.size++;
        return this;
    }
    pop(){
        if(this.size === 0){ return null}
        var temp = this.top;
        if(this.size === 1) { this.top = null; this.bottom = null;}
        else{
            this.top = temp.next;    
        }
        this.size--;
        return this;
    }
    view(){
        var n = this.top;
        while(n){
            console.log(n.val);
            n = n.next;
        }
    }
}

var stack = new Stack();
stack.push(10).push(20).push(30).push(40);
stack.view();
stack.pop();
stack.view();
console.log(stack);