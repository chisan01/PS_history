function allPathsSourceTarget(graph: number[][]): number[][] {
  return new DAG(graph).allPathsSourceTarget();
}

class DAG {
  private readonly graph: number[][];
  private readonly allPaths: number[][];
  private readonly LAST_NODE: number;

  constructor(graph: number[][]) {
      this.graph = graph;
      this.LAST_NODE = graph.length - 1;
      this.allPaths = [];
  }

  allPathsSourceTarget(): number[][] {
      if(this.allPaths.length === 0) this.dfs(0, []);
      return this.allPaths;
  }

  private dfs(curNode: number, curPath: number[]): void {
      if(curNode === this.LAST_NODE) {
          this.allPaths.push([...curPath, curNode]);
          return;
      }
      for (const nextNode of this.graph[curNode]) {
          this.dfs(nextNode, [...curPath, curNode]);
      }
  }
}
