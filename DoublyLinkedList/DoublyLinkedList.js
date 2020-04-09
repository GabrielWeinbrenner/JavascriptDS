class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var temp = new Node(val);
        if(this.length === 0) { this.head = temp; this.tail = temp}
        else{
            this.tail.next = temp;
            temp.prev = this.tail;
            this.tail = temp;
        }
        this.length++;
        return this;

    }
}

var list = new DoublyLinkedList(10);
list.push(10);
list.push(20);
console.log(list);