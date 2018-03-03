const MoveTree = require("./tree");
const tree = new MoveTree([3, 3], 4);
tree.inspect();

class KnightSearcher {
	constructor(moveTree) {
		this.moveTree = moveTree;
	}

	bfsFor(targetCoords) {
		let queue = [this.moveTree.root];
		let path = [];
		while (queue.length) {
			let node = queue.shift();
			if (node.x === targetCoords[0] && node.y === targetCoords[1]) {
				let depth = node.depth;

				while (node) {
					path.unshift([node.x, node.y]);
					node = node.parent;
				}

				return { path, depth };
			} else {
				queue = queue.concat(node.children);
			}
		}

		return null;
	}

	dfsFor(targetCoords) {
		let queue = [this.moveTree.root];
		let path = [];
		while (queue.length) {
			let node = queue.pop();
			if (node.x === targetCoords[0] && node.y === targetCoords[1]) {
				let depth = node.depth;

				while (node) {
					path.unshift([node.x, node.y]);
					node = node.parent;
				}

				return { path, depth };
			} else {
				queue = queue.concat(node.children);
			}
		}

		return null;
	}
}

const searcher = new KnightSearcher(tree);
console.log(searcher.bfsFor([0, 0]));
console.log(searcher.dfsFor([0, 0]));

// benchmark tests
// function Benchmark() {
// 	for (var i = 0; i < 100000; i++) {
// 		// searcher.bfsFor([0, i % 7]); // [Finished in 4.751s] [Finished in 5.463s]
// 		// searcher.dfsFor([0, i % 7]); // [Finished in 18.774s] [Finished in 18.811s]
// 	}
// }
// Benchmark();
