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
    bfs(){
        var queue = [];
        var visited = [];
        queue.unshift(this.root);
        while(queue.length){
            var n = queue.shift();
            visited.push(n.val);
            if(n.left){
                queue.unshift(n.left);
            } 
            if (n.right){
                queue.unshift(n.right);
            } 
        }
        return visited;
    }
    dfspre(){
        var visited = [];
        var current = this.root;
        function helper(n){
            visited.push(n.val);
            if(n.left){
                helper(n.left);
            }
            if(n.right){
                helper(n.right);
            }
        }
        helper(current);
        return visited;
    }
    dfspost(){
        var visited = [];
        var current = this.root;
        function helper(n) {
            if (n.left) {
                helper(n.left);
            }
            if (n.right) {
                helper(n.right);
            }
            visited.push(n.val);

        }
        helper(current);
        return visited;     
    }
    dfsin() {
        var visited = [];
        var current = this.root;
        function helper(n) {

            if (n.left) {
                helper(n.left);
            }
            visited.push(n.val);

            if (n.right) {
                helper(n.right);
            }


        }
        helper(current);
        return visited;
    }
}

var tree = new BinarySearchTree();
tree.insert(10).insert(20).insert(30).insert(50).insert(4).insert(5);
console.log(tree);
console.log(tree.find(20));
console.log("-----")
var s = [];
s.unshift(10);
console.log(s.shift());
console.log("-----")

console.log(tree.bfs());
console.log(tree.dfspre());
console.log(tree.dfspost());
console.log(tree.dfsin());
