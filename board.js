import Node from "./node.js"

export function createBoard() {
    const board = []
    for (let x = 0; x < 8; x++) {
        const row = []
        for (let y = 0; y < 8; y++) {
            row.push(new Node(x, y))
        }
        board.push(row)
    }
    return board
}