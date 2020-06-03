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
    insertRecursive(val, root = this.root){
        var newNode = new Node(val);
        if (!root) {  this.root = newNode;}
        else{
            if(root.val < val){
                if(root.right == null){
                    root.right = newNode;
                }else{
                    this.insertRecursive(val, root.right);
                }
            }else if(root.val > val){
                if (root.left == null) {
                    root.left = newNode;
                } else {
                    this.insertRecursive(val, root.left);
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
                        check = check.left;
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
function isValidTree(root){
    if(!root){ return true; }
    var currentNode = root;
    var q = []
    q.unshift(currentNode);
    while(q.length){
        currentNode = q.shift();
        if (currentNode.left) {
            q.unshift(currentNode.left);
            if(currentNode.left.val > currentNode.val){
                return false;
            }
        }
        if (currentNode.right) {
            q.unshift(currentNode.right);
            if (currentNode.right.val < currentNode.val) {
                return false;
            }
        } 
    }
    return true;
}
function validateBST(node, min, max){
    if(!node) return true;

    if(node.val < min || node.val > max){
        return false;
    }
    return validateBST(node.left, min, node.val) && validateBST(node.right, node.val, max);
}
var root = new Node(10);
var newNode = new Node(4);
var newNode1 = new Node(11);
root.left = newNode1;
root.right = newNode;
newNode1.left = new Node(5)
var tree = new BinarySearchTree();
console.log(isValidTree(root));
tree.insertRecursive(10)
tree.insertRecursive(20)
tree.insertRecursive(30)
tree.insertRecursive(5)
console.log(isValidTree(tree.root));
console.log(validateBST(root));
console.log(validateBST(tree.root));
// console.log(tree);
// console.log(tree.find(20));
// console.log("-----")
// var s = [];
// s.unshift(10);
// console.log(s.shift());
// console.log("-----")

// console.log(tree.bfs());
// console.log(tree.dfspre());
// console.log(tree.dfspost());
// console.log(tree.dfsin());
