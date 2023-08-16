import { Player } from "../src/player"; // assuming the Player class is defined in player.ts

describe("Player", () => {
  it("Should create player 1 with symbol 'X' and name 'player 1'", () => {
    const player = new Player("X", "player 1");
    expect(player.symbol).toBe("X");
    expect(player.name).toBe("player 1");
  });
});
