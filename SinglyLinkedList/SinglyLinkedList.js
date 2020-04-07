
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var temp = new Node(val);
        if(this.head == null){
            this.head = temp;
            this.tail = this.head;
        }else{
            this.tail.next = temp;
            this.tail = temp;
        }
        this.length++;
        return true;
    }
}

var list = new SinglyLinkedList();

list.push(10);
list.push(20);
console.log(list)