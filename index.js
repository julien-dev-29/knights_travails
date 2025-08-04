import { createBoard } from "./board.js";

function knightMoves(start, end) {
    const board = createBoard()
    const [startX, startY] = start
    const [endX, endY] = end
    const startNode = board[startX][startY]
    const queue = [startNode]
    while (queue.length > 0) {
        const node = queue.shift()
        if (node.x === endX && node.y === endY) {
            const path = reconstructPath(node)
            console.log(`You made it in ${path.length - 1} moves!  Here's your path:`);
            for (const step of path) {
                console.log(step)
            }
            return path;
        }
        if (!node.visited) {
            node.visited = true
            for (const [x, y] of nextMoves([node.x, node.y])) {
                const neighbor = board[x][y]
                if (!neighbor.visited) {
                    neighbor.parent = node
                    queue.push(neighbor)
                }
            }
        }
    }
    return null
}

function nextMoves([x, y]) {
    const moves = [
        [x + 2, y + 1],
        [x + 2, y - 1],
        [x - 2, y + 1],
        [x - 2, y - 1],
        [x + 1, y + 2],
        [x + 1, y - 2],
        [x - 1, y + 2],
        [x - 1, y - 2],
    ]
    return moves.filter(([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8)
}

function reconstructPath(endNode) {
    const path = [];
    let current = endNode
    while (current) {
        path.unshift([current.x, current.y])
        current = current.parent
    }
    return path
}

knightMoves([3, 3], [4, 3])