class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
        this.freq = 1;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(val){
        var n = new Node(val);
        if(this.root === null) {this.root = n}
        else{
            var check = this.root
            while(true){
                if(check.val === n.val){
                    n.freq++;
                }else if (check.val < n.val) {
                    if(check.right !== null){
                        check = check.right;
                    }else{
                        check.right = n;
                        break;
                    }
                } else if (check.val > n.val) {
                    if (check.left !== null) {
                        check = check.left;
                    } else {
                        check.left = n;
                        break;
                    }
                }   
            }
        }
        return this;
    }
}

var tree = new BinarySearchTree();
tree.insert(10).insert(20).insert(30);
console.log(tree);