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
    unshift(val){
        var temp = new Node(val);
        if (this.length === 0) { this.head = temp; this.tail = temp }
        else{
            this.head.prev = temp;
            temp.next = this.head;
            this.head = temp;

        }
        this.length++;
        return temp;
    }
    get(index){
        if(index > this.length/2){
            var n = this.tail;
            var c = this.length -1;
            while(n){
                if(c === index){
                    return n;
                }
                c--;
                n = n.prev;
            }
        }else{
            var n = this.head;
            var c = 0;
            while (n) {
                if (c === index) {
                    return n;
                }
                c++;
                n = n.next;
            }
        }
        return null;
    }
    set(index, val){
        var node = this.get(index);
        if(node){
            node.val = val;
            return true;
        }
        return false;
    }
    traverse(){
        var n = this.head;
        var s = "";
        while(n){
            n.next !== null ? s+=n.val+"->" : s+=n.val;
            n = n.next;
        }
        return s;
    }
}

var list = new DoublyLinkedList(10);
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(60);

list.pop();
list.unshift(1);
list.shift();
console.log(list.traverse());
list.set(3, 10);
console.log(list.traverse());

console.log(list.get(10));