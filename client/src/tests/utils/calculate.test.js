import {
  calculateWinner,
  calculateWinnerIndex,
  indexToRowCol,
  isDraw,
} from '@utils/calculate';

// Winner X
const board1 = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
// Draw
const board2 = ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X', 'O'];
// Winner O
const board3 = ['X', 'O', 'X', 'X', 'O', null, 'O', 'O', 'X'];
// No winner yet
const board4 = ['X', 'O', null, null, null, null, null, null, null];

describe('Calculate Utils Tests', () => {
  it('Should calculate who is the winner', () => {
    expect(calculateWinner(board1)).toBe('X');
    expect(calculateWinner(board2)).toBe(null);
    expect(calculateWinner(board3)).toBe('O');
    expect(calculateWinner(board4)).toBe(null);
  });

  it('Should calculate which are the winning positions', () => {
    expect(calculateWinnerIndex(board1)).toMatchObject([0, 4, 8]);
    expect(calculateWinnerIndex(board2)).toMatchObject([null]);
    expect(calculateWinnerIndex(board3)).toMatchObject([1, 4, 7]);
    expect(calculateWinnerIndex(board4)).toMatchObject([null]);
  });

  it('Should calculate if it is a draw', () => {
    expect(isDraw(board1)).toBeFalsy();
    expect(isDraw(board2)).toBeTruthy();
    expect(isDraw(board3)).toBeFalsy();
    expect(isDraw(board4)).toBeFalsy();
  });

  it('Should calculate what is the col and row of the index', () => {
    expect(indexToRowCol(0, 3)).toMatchObject([0, 0]);
    expect(indexToRowCol(1, 3)).toMatchObject([0, 1]);
    expect(indexToRowCol(2, 3)).toMatchObject([0, 2]);
    expect(indexToRowCol(3, 3)).toMatchObject([1, 0]);
    expect(indexToRowCol(4, 3)).toMatchObject([1, 1]);
    expect(indexToRowCol(5, 3)).toMatchObject([1, 2]);
    expect(indexToRowCol(6, 3)).toMatchObject([2, 0]);
    expect(indexToRowCol(7, 3)).toMatchObject([2, 1]);
    expect(indexToRowCol(8, 3)).toMatchObject([2, 2]);
  });
});
