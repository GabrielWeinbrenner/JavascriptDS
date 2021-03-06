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
    remove(){
        var v = this.values;
        [v[0], v[v.length - 1]] = [v[v.length - 1], v[0]];
        var n = v.pop();
        var parentIndex = 0;
        while(parentIndex < v.length){
            var leftChild = 2 * parentIndex + 1;
            var rightChild = 2 * parentIndex + 2;
            if(v[leftChild] > v[parentIndex] && v[rightChild] > v[parentIndex]){
                if(v[leftChild] > v[rightChild]){
                    [v[leftChild], v[parentIndex]] = [v[parentIndex], v[leftChild]];
                    parentIndex = 2 * parentIndex + 1;
                }else if(v[rightChild] > v[leftChild]){
                    console.log(v[parentIndex], v[rightChild]);
                    [v[parentIndex], v[rightChild]] = [v[rightChild], v[parentIndex]];
                    parentIndex = 2 * parentIndex + 2;
                }
            }else if(v[leftChild] > v[parentIndex]){
                [v[leftChild], v[parentIndex]] = [v[parentIndex], v[leftChild]];
                parentIndex = 2 * parentIndex + 1;
            }else if (v[rightChild] < v[parentIndex]) {
                [v[rightChild], v[parentIndex]] = [v[parentIndex], v[rightChild]];
                parentIndex = 2 * parentIndex + 2;
            }else{
                break;
            }
        }
        return n;
    }
    removeRefactored(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            } 
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(swap === null && rightChild > element || (swap !== null && rightChild > leftChild)){
                    swap = rightChildIdx;
                }
            }

            if(swap == null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

var heap = new MaxBinaryHeap();
heap.insert(10).insert(30).insert(20).insert(40).insert(25).insert(15).insert(60);
console.log(heap.values);
console.log(heap.remove());
console.log(heap.values);