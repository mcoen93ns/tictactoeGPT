export class Board {
  grid: (null | "X" | "O")[][];

  constructor() {
    this.grid = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  placeMove(row: number, col: number, symbol: "X" | "O"): void {
    if (this.grid[row][col] !== null) {
      throw new Error("Cell already occupied!");
    }
    this.grid[row][col] = symbol;
  }
}
