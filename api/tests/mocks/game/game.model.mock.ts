import { GameStatus, Players, GameResult } from '@utils/constants';

export const game = {
  _id: '5e573e29d5360c3f42d4890e',
  status: GameStatus.GAME_OVER,
  board: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'],
  winner: GameResult.PLAYER_ONE,
  turn: Players.PLAYER_TWO,
};

export const games = [
  {
    _id: '5e573e29d5360c3f42d4890e',
    status: GameStatus.GAME_OVER,
    board: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'],
    winner: GameResult.PLAYER_ONE,
    turn: Players.PLAYER_TWO,
  },
  {
    _id: '5e573e29d5360c3f42d6790e',
    status: GameStatus.GAME_OVER,
    board: ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X', 'O'],
    winner: GameResult.DRAW,
    turn: Players.PLAYER_TWO,
  },
  {
    _id: '5e5749ae208f0a4724295432',
    status: GameStatus.GAME_OVER,
    board: ['X', 'O', 'X', 'X', 'O', null, 'O', 'O', 'X'],
    winner: GameResult.PLAYER_TWO,
    turn: Players.PLAYER_ONE,
  },
  {
    _id: '5e5749ae208f0a4724298232',
    status: GameStatus.STARTED,
    board: ['X', 'O', null, null, null, null, null, null, null],
    turn: Players.PLAYER_ONE,
  },
];

export const stats = {
  playerOne: 1,
  playerTwo: 1,
};
