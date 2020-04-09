
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
    get(index){
        if(index < 0 || index > this.length){ return null }
        var temp = this.head;
        var a = 0;
        while(a !== index){
            temp = temp.next;
            a++;
        }
        return temp;
    }
    set(index, val){
        var temp = this.get(index);
        if(temp === null) return false;
        temp.val = val;
        return true;
    }
    insert(index,val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length-1) { !!this.push(val); }
        if (index === 0) { !!this.unshift(val); } 
        var temp = new Node(val);
        var prev = this.get(index - 1);
        var aft = prev.next;
        prev.next = temp;
        temp.next = aft;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index > this.length) return false;
        if(index == this.length-1) !!this.pop();
        if(index == 0) !!this.shift();
        var temp = this.get(index);
        var prev = this.get(index-1);
        var aft = temp.next;
        prev.next = aft;
        this.length--;
        return temp;
    }
    reverse(){
        var temp = this.tail;
        this.tail = this.head;
        this.head = temp;

        var next = null;
        var prev = null; 
        var node = this.tail;
        while(node){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    traverse(){
        var temp = this.head;
        while(temp){
            console.log(temp.val);
            temp = temp.next;
        }
    }
}

var list = new SinglyLinkedList();

list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.unshift(30);
// console.log(list.pop())
// // console.log(list.traverse())
// console.log(list.get(1));
// console.log(list.set(1, 20));
// console.log(list.get(1));
console.log(list.traverse());
list.reverse();
console.log(list.traverse());