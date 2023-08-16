## Board Class Unit Tests

### Unit: Creating a new game board

✅ **Initial Board State**: - **New game** -->
[
[null, null, null],
[null, null, null],
[null, null, null]
];

### Unit: Placing a move on the board

✅ **Place 'X' at (1,1)** -->
[
[null, null, null],
[null, 'X', null],
[null, null, null]
];

✅ **Place 'O' at (0,2)** -->
[
[null, null, 'O'],
[null, null, null],
[null, null, null]
];

✅ **Place 'X' in an already occupied cell (1,1)** --> - **Expected Outcome**: Throw an error indicating that the cell is already occupied.

## Player Class Unit Tests

### Unit: Initialize a Player

✅ **Create player 1 with symbol 'X'** - **Expected Outcome**: Player's symbol attribute should be 'X' and name should be 'player 1'.

2. **Create player 2 with symbol 'O'**
   - **Expected Outcome**: Player's symbol attribute should be 'O' and name should be 'player 2'.

### Component Test: Player Makes a Move

1. **Player 1 ('X') makes a move at (2,2) on the board**

   - **Expected Outcome**: The board should reflect 'X' at position (2,2).

2. **Player 2 ('O') makes a move at (0,1) on the board**

   - **Expected Outcome**: The board should reflect 'O' at position (0,1).

3. **Player 1 ('X') tries to make a move in an already occupied cell (1,1) on the board**
   - **Expected Outcome**: Throw an error or return a message indicating that the cell is already occupied.
