class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(v){
        if(!this.adjacencyList[v]) this.adjacencyList[v] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
}

let g = new Graph()
g.addVertex("New York");
g.addVertex("Tokyo");
g.addVertex("Los Angeles");

g.addEdge("New York", "Tokyo");