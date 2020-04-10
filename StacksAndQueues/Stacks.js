class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }
    push(val){
        var node = new Node(val);
        if(this.size === 0) { this.top = node; this.bottom = node;}
        else{
            var temp = this.top;
            this.top = node;
            this.top.next = temp;
        }
        this.size++;
        return this;
    }
    pop(){
        if(this.size === 0){ return null}
        var temp = this.top;
        if(this.size === 1) { this.top = null; this.bottom = null;}
        else{
            this.top = temp.next;    
        }
        this.size--;
        return temp;
    }
    view(){
        var n = this.top;
        while(n){
            console.log(n.val);
            n = n.next;
        }
    }
}
function reverseOf(bracket){
    if(bracket === "{") return "}"; 
    if(bracket === "(") return ')';
    if(bracket === "[") return "]";
    if (bracket === "}") return "{";
    if (bracket === ")") return '(';
    if (bracket === "]") return "[";
}
function isLeft(bracket){
    if(bracket == "{" || bracket == "(" || bracket == "[") return true;
    return false;
}
function checkIfBracketMatch(bracket){
    var stack = new Stack();

    var bracketString = bracket.split("");
    for (var i = 0; i < bracketString.length ;i++){
        var rev = reverseOf(bracketString[i]);
        if(isLeft(bracketString[i])){
            stack.push(bracketString[i])
        }else if(stack.pop().val != rev){
            return false;
        }
    }    
    return stack.size === 0 ? true : false;
}

console.log(checkIfBracketMatch("[[{{}}]][]{}{}{}{}{}{}"));
