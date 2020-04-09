class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var node = new Node(val);
        if(this.size === 0) { this.first = node; this.last = node;}
        else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return node;
    }
    dequeue(){ 
        if(this.size === 0){ return null; }
        var node = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = node.next;
        }
        this.size--;
        return node;
    }
}

var queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.dequeue();

console.log(queue);