class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.vals = [];
    }
    enqueue(val,priority){
        var n = new Node(val,priority);
        this.vals.push(n);
        var idx = this.vals.length -1 ;
        var parentIdx = Math.floor((idx - 1) / 2)
        if(this.vals[parentIdx] == undefined) {return this;}
        while (this.vals[parentIdx].priority > n.priority){
            parentIdx = Math.floor((idx - 1) / 2);

            [this.vals[idx], this.vals[parentIdx]] = [this.vals[parentIdx], this.vals[idx]];
            idx = parentIdx;
        }
        return this;
    }

    dequeue(){

    }
}

var pqueue = new PriorityQueue();
pqueue.enqueue(10,2).enqueue(4,3).enqueue(2,1).enqueue(3,2).enqueue(10,1).enqueue(31,1).enqueue(69,2).enqueue(70,3);

console.log(pqueue.vals);