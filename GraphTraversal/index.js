class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(v) {
        if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    }
    removeVertex(v1) {
        this.adjacencyList[v1] = this.adjacencyList[v1].forEach((v) => this.removeEdge(v1, v));
        delete this.adjacencyList[v1];
    }
    dfsRecursive(v1){
        var vertices = [];
        var visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(v){
            if (!v) return null;
            visited[v] = true;
            vertices.push(v);
            adjacencyList[v].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor);
                }
            })
        })(v1);
        return vertices;
    }

}

let g = new Graph()
g.addVertex("New York");
g.addVertex("Tokyo");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");

g.addEdge("New York", "Tokyo");
g.addEdge("New York", "Hong Kong");
g.addEdge("Los Angeles", "Hong Kong");


console.log(g.dfsRecursive("New York"));