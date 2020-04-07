
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
    pop(){
        if(this.length == 0){ return undefined }
        var current = this.head;
        var newTail = current.next;
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(this.length == 0) { return undefined } 
        var temp = this.head;
        this.head = temp.next;
        this.length--;
        if(this.length === 0 ){
            this.tail = null;
        }
        return temp;
    }
    unshift(val){
        var temp = new Node(val);
        if(this.head == null){
            this.head = temp;
            this.tail = this.head;
        }else{
            temp.next = this.head;
            this.head = temp;
        }
        this.length++;
        return this
    }
}

var list = new SinglyLinkedList();

list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.unshift(30);
console.log(list.pop())
console.log(list)