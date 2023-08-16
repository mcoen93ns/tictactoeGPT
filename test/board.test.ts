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
});
