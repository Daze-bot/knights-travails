const squareRegistry = new Map();

class ChessSquare {
  constructor(x, y) {
    this.xPos = x;
    this.yPos = y;
    this.predecessor = null;
    this.KNIGHT_OFFSETS = [
      [1, 2], [1, -2],
      [2, 1], [2, -1],
      [-1, 2], [-1, -2],
      [-2, 1], [-2, -1]
    ];
  }

  getPredecessor() {
    return this.predecessor;
  }

  setPredecessor(newPred) {
    this.predecessor = this.predecessor || newPred;
  }

  name() {
    return `${this.xPos}, ${this.yPos}`;
  }

  createKnightMoves() {
    return this.KNIGHT_OFFSETS
             .map((offset) => newSquareFrom(offset[0], offset[1]))
             .filter((square) => square !== undefined);
  }

  newSquareFrom(xOffset, yOffset) {
    const [newX, newY] = [this.xPos + xOffset, this.yPos + yOffset];
    if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) {
      return ChessSquare(newX, newY);
    }
  }
}

export { ChessSquare };