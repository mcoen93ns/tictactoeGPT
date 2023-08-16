export class Board {
  grid: (null | "X" | "O")[][];

  constructor() {
    this.grid = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }
}
