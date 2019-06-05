class Edge {
    constructor(src, dest, weight) {
        this.src = src;
        this.dest = dest,
        this.weight = weight;
    }
}

class Graph { 
	constructor(noOfVertexes, directed) { 
        this.noOfVertices = noOfVertexes;
        this.directed = directed;
		this.AdjacencyList = new Map(); 
    }
    
    addVertex(v) { 
        this.AdjacencyList.set(v, []); 
    }

    addEdge(src, dest, weight) { 
        let edge = new Edge(src, dest, weight);
        this.AdjacencyList.get(src).push(edge);  
        if (!this.directed) {
            let reversed = new Edge(dest, src, weight);
            this.AdjacencyList.get(dest).push(reversed);
        }
    }

    getEdge(src, dest) {
        let values = this.AdjacencyList.get(src);
        for (let i of values) {
            if (i.dest === dest)
                return i;
        }
    }

    printGraph() 
    { 
        let keys = this.AdjacencyList.keys(); 
  
        for (let i of keys)  
        { 
            let values = this.AdjacencyList.get(i); 
            let conc = ""; 
  
            for (let j of values) 
                conc += j.dest + " "; 
  
            console.log(i + " -> " + conc); 
        } 
    } 
}

function main() {
    var g = new Graph(6, false); 
    let vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
    for (var i = 0; i < vertices.length; i++) { 
        g.addVertex(vertices[i]); 
    }
    g.addEdge('A', 'B', 3); 
    g.addEdge('A', 'D', 2); 
    g.addEdge('A', 'E', 1); 
    g.addEdge('B', 'C', 4); 
    g.addEdge('D', 'E', 7); 
    g.addEdge('E', 'F', 0); 
    g.addEdge('E', 'C', 5); 
    g.addEdge('C', 'F', 6); 

    g.printGraph();
}