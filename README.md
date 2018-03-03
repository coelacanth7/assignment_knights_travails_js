# Knights Moves

A Knight on a normal 8X8 chess board can reach any square. This repository is just an exercise to show that. It workds as such

### Tree.js

Tree.js is a class that builds a tree of possible moves based on inputs:

```js
let tree = new MoveTree([3, 3], 2);
tree.inspect();
```

[3, 3] is the starting coordinates and 2 is the depth for how many moves will be planned.

Tree.js uses a tree structure of nodes, where each node's children contains all the possible moves a knight can make without going off the board. Each child node points back to the parent.

###
Searcher.js takes a Tree.js data structure and uses either a breadith first search, or a depth first search to find out how many mvoves and the path a Knight will take to reach a given squarre:

```js
const MoveTree = require("./tree");
const tree = new MoveTree([3, 3], 4);

console.log(searcher.bfsFor([0, 0]));
// { path: [ [ 3, 3 ], [ 1, 2 ], [ 0, 0 ] ], depth: 2 }
console.log(searcher.dfsFor([0, 0]));
// { path: [ [ 3, 3 ], [ 5, 4 ], [ 4, 2 ], [ 2, 1 ], [ 0, 0 ] ], depth: 4 }
```

The search algorithms take an input array coordinates you want to reach and the depth is the number of moves found by each algorithm to reach those coordinates.
