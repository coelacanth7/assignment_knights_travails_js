// This is just one way to represent a Move node
// The `parent` attribute will come in handy later...
// x and y are positions on the board
class Move {
	constructor(x, y, depth, children, parent) {
		this.x = x;
		this.y = y;
		this.depth = depth;
		this.children = children;
		this.parent = parent;
	}
}

// the moves a knight can go
var possibleMoves = [
	{ x: -2, y: -1 },
	{ x: -2, y: +1 },
	{ x: -1, y: -2 },
	{ x: -1, y: +2 },
	{ x: +1, y: -2 },
	{ x: +1, y: +2 },
	{ x: +2, y: -1 },
	{ x: +2, y: +1 }
];

// move tree
class MoveTree {
	constructor(givenPos, maxDepth) {
		this.moveNodes = 1;
		this.maxDepth = maxDepth;
		this.root = new Move(givenPos[0], givenPos[1], 0, [], null);
		this.buildTheTree(this.root, maxDepth);
	}

	// build all possibleMoves from a givenPos
	getChildPositions(givenPos, depth, parent) {
		let positions = [];

		for (var i = 0; i < possibleMoves.length; i++) {
			let possibleMove = possibleMoves[i];
			let x = givenPos[0] + possibleMove.x;
			let y = givenPos[1] + possibleMove.y;
			if (x > 7 || x < 0 || y > 7 || y < 0) continue;
			let move = new Move(x, y, depth, [], parent);
			positions.push(move);
			this.moveNodes++;
		}

		return positions;
	}

	// build a tree of moves when necessary
	buildTheTree(parent, maxDepth) {
		let queue = [parent];
		while (queue.length) {
			let treeNode = queue.shift();
			if (treeNode.depth <= maxDepth) {
				treeNode.children = this.getChildPositions(
					[treeNode.x, treeNode.y],
					treeNode.depth + 1,
					treeNode
				);
				queue = [...queue, ...treeNode.children];
			} else {
				break;
			}
		}
	}

	// inspect tree
	inspect() {
		console.log(
			`Your tree has ${this.moveNodes} move nodes and a max depth of ${
				this.maxDepth
			}`
		);
	}
}

module.exports = MoveTree;

// tests
let tree = new MoveTree([3, 3], 2);
// tree.root.children.forEach(child => {
// 	console.log(child);
// });
tree.inspect();
