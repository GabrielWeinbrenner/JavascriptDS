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
        [this.vals[0], this.vals[this.vals.length-1]] = [this.vals[this.vals.length-1], this.vals[0]];
        var n = this.vals.pop();
        var idx = 0;
        var length = this.vals.length;
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let rightChild,leftChild;
            let currentChild = this.vals[idx];
            let swap = null;
            if (leftChildIdx < length){
                leftChild = this.vals[leftChildIdx];
                if(leftChild.priority < currentChild.priority){
                    swap = leftChildIdx;

                }
            }
            if(rightChildIdx < length){
                rightChild = this.vals[rightChildIdx]
                if(rightChild.priority < currentChild.priority && swap == null ||
                   rightChild.priority > leftChild.priority && swap !== null){
                    swap = rightChildIdx
                }
            }

            if(swap == null) break;
            [this.vals[swap], this.vals[idx]] = [this.vals[idx], this.vals[swap]];

            idx = swap;
        }

        return n;
    }
}

var pqueue = new PriorityQueue();
pqueue.enqueue(10,2).enqueue(4,3).enqueue(2,1).enqueue(3,2).enqueue(10,1).enqueue(31,1).enqueue(69,2).enqueue(70,3);

console.log(pqueue.vals);

pqueue.dequeue();
pqueue.dequeue();
console.log(pqueue.vals);
