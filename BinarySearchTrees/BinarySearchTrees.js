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
    dfsin(node = this.root, count = [0]) {
        if(!node){
            return;
        }
        this.dfsin(node.right, count);
        count[0]++;

        console.log(node.val, count[0]);

        this.dfsin(node.left, count);
    }
    dfsIterative(){
        var s = []
        var results = [];
        s.push(this.root);
        while(s){
            var node = s.pop();
            if(!node){
                break;
            }
            results.push(node.val);
            if(node.right != null){
                s.push(node.right);
            }
            if(node.left != null){
                s.push(node.left);
            }
        }
        return results;
    }
    nthLargest(node, count, n) {
        if(!node){
            return;
        }

        this.nthLargest(node.right, count, n);
        count[0]++;
        if(count[0] == n){
            console.log(node.val);
            return;
        }
        this.nthLargest(node.left, count, n);
    }
}
function isValidTree(root){
    if(!root) return true;
    var stack = [{ node: root, minimum: -Infinity, maximum: Infinity}];

    while(stack.length){
        var props = stack.pop();
        var node = props.node;
        var minimum = props.minimum;
        var maximum = props.maximum;
        if(node.val < minimum || node.val > maximum){
            return false;
        }
        if(node.left){
            stack.push({ node: node.left, minimum: minimum, maximum: node.val});
        }
        if(node.right){
            stack.push({ node: node.right, minimum: node.val, maximum: maximum});
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
var tree = new BinarySearchTree();
tree.insertRecursive(10)
tree.insertRecursive(20)
tree.insertRecursive(30)
tree.insertRecursive(5)
var treeTwo = new BinarySearchTree();
treeTwo.insertRecursive(10)
treeTwo.insertRecursive(20)
treeTwo.insertRecursive(15)
treeTwo.insertRecursive(50)
treeTwo.insertRecursive(5)
treeTwo.insertRecursive(40)
console.log(tree.dfsIterative());
tree.nthLargest(tree.root, [0], 3);
console.log(treeTwo.dfsIterative());

treeTwo.nthLargest(treeTwo.root, [0], 2);
