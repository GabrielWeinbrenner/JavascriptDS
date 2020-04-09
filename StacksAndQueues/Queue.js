class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }
    enqueue(val){
        var node = new Node(val);
        if(this.size === 0) { this.top = node; this.bottom = node;}
        else {
            this.bottom.next = node;
            this.bottom = node;
        }
        this.size++;
        return node;
    }
    dequeue(){ 
        if(this.size === 0){ return null; }
        var node = this.top;
        if(this.size === 1){
            this.top = null;
            this.bottom = null;
        }else{
            this.top = node.next;
        }
        this.size--;
        return node;
    }
    view(){
        var n = this.top;
        while(n){
            console.log(n.val);
            n = n.next;
        }
    }
}

var queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.view()
console.log("")
queue.dequeue();
queue.view()
console.log(queue);