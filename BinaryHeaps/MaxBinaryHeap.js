class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(val){
        this.values.push(val);
        var index = this.values.length -1;
        var parentIndex = Math.floor((index-1)/2);
        while(this.values[parentIndex] < this.values[index]){
            [this.values[parentIndex], this.values[index]] = 
            [this.values[index], this.values[parentIndex]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2)
        }
        return this;
    }
}

var heap = new MaxBinaryHeap();
heap.insert(10).insert(30).insert(20).insert(40).insert(25).insert(15);
console.log(heap.values);