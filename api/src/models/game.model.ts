import mongoose, { Schema } from 'mongoose';
import { GameStatus, Players } from '../utils/constants';

const gameStatus: object = {
  values: [GameStatus.STARTED, GameStatus.GAME_OVER],
  message: '{VALUE} no es un estado válido',
};

const player: object = {
  values: ['X', 'O'],
  message: '{VALUE} no es un jugador válido',
};

const result: object = {
  values: ['X', 'O', 'D'], // player1, player2, draw
  message: '{VALUE} no es un resultado válido',
};

const GameSchema: Schema = new Schema(
  {
    status: {
      type: String,
      required: true,
      default: GameStatus.STARTED,
      enum: gameStatus,
    },
    board: {
      type: Array,
      required: true,
      default: Array(9).fill(null),
    },
    winner: {
      type: String,
      enum: result,
    },
    turn: {
      type: String,
      enum: player,
      default: Players.PLAYER_ONE,
    },
  },
  { timestamps: { createdAt: true, updatedAt: true } },
);

export default mongoose.model('Game', GameSchema);
