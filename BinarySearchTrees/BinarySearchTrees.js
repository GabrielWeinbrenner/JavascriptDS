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
        if(this.root === null) {this.root = n; return this;}
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
                        return this;
                    }
                } else if (check.val > n.val) {
                    if (check.left !== null) {
                        check = check.left;
                    } else {
                        check.left = n;
                        return this;
                    }
                }   
            }
        }
    }
    find(val){
        if(this.root === null) { return undefined}
        else{
            var check = this.root;
            while(true){
                if(val === check.val){
                    return check;
                }else if(val > check.val){
                    if(check.right !== null){
                        check = check.right;
                    }else{
                        return undefined;
                    }
                }else if(val < check.val){
                    if(check.left !== null){
                        check = checck.left;
                    }else{
                        return undefined;
                    }
                }
            }
        }
    }
}

var tree = new BinarySearchTree();
tree.insert(10).insert(20).insert(30);
console.log(tree);
console.log(tree.find(20));