export class Player {
  symbol: "X" | "O";

  name: string;

  constructor(symbol: "X" | "O", name: string) {
    this.symbol = symbol;
    this.name = name;
  }
}
