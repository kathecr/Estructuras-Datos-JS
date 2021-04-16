class Graph {
  constructor() {
    this.node = 0;
    this.adjacentList = {};
  }
  addNode(node) {
    this.adjacentList[node] = [];
    this.node++;
  }
  connection(node, arrayNodes) {
    for (let i = 0; i < arrayNodes.length; i++) {
      this.adjacentList[node].push(arrayNodes[i]);
      this.adjacentList[arrayNodes[i]].push(node);
    }
  }
}

const graph = new Graph();
graph.addNode("1")
graph.addNode("3")
graph.addNode("4")
graph.addNode("5")
graph.addNode("6")
graph.addNode("8")

graph.connection("1",["6","3","4"])

