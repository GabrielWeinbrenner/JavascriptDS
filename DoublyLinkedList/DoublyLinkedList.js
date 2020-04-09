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
    pop(){
        if(this.length === 0) return undefined;
        else{
            var deletedTail = this.tail;
            if(this.length === 1){ this.head = null; this.tail = null}
            else{
                this.tail = deletedTail.prev;
                this.tail.next = null;    
                deletedTail.prev = null;         
            }
            this.length--;
            return deletedTail;
        }
    }
    shift(){
        if(this.length === 0 ) return undefined;
        else{
            var oldHead = this.head;
            if(this.length === 1) {this.head = null; this.tail = null}
            else{
                this.head = oldHead.next;
                this.head.prev = null;
                oldHead.next = null
            }
            this.length--;
            return oldHead 
        }
    }
}

var list = new DoublyLinkedList(10);
list.push(10);
list.push(20);
list.push(30);
list.pop();
console.log(list);