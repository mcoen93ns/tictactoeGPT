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

🙌 **Place 'O' at (0,2)** -->
[
[null, null, 'O'],
[null, 'X', null],
[null, null, null]
];

**Place 'X' in an already occupied cell (1,1)** --> - **Expected Outcome**: Throw an error or return a message indicating that the cell is already occupied.
