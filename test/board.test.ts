import { Board } from "../src/board";

describe("Board", () => {
  describe("Creating a new game board", () => {
    it("Should initialize a 3x3 empty board", () => {
      const board = new Board();
      expect(board.grid).toEqual([
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]);
    });
  });
  describe("Placing a move on the board", () => {
    it("Should place 'X' at (1,1)", () => {
      const board = new Board();
      board.placeMove(1, 1, "X");
      expect(board.grid).toEqual([
        [null, null, null],
        [null, "X", null],
        [null, null, null],
      ]);
    });
    it("Should place 'O' at (0,2)", () => {
      const board = new Board();
      board.placeMove(0, 2, "O");
      expect(board.grid).toEqual([
        [null, null, "O"],
        [null, null, null],
        [null, null, null],
      ]);
    });
  });
});
