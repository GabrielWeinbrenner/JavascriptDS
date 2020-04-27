class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(v){
        this.adjacencyList[v] = [];
    }
}