import mongoose, { Schema, Document } from 'mongoose';
import { GameStatus, Players, GameResult } from '../utils/constants';

export interface IGame extends Document {
  status: GameStatus;
  board: Array<string | null>;
  winner: GameResult;
  turn: Players;
}

const gameStatus: object = {
  values: [GameStatus.STARTED, GameStatus.GAME_OVER],
  message: '{VALUE} no es un estado válido',
};

const player: object = {
  values: [Players.PLAYER_ONE, Players.PLAYER_TWO],
  message: '{VALUE} no es un jugador válido',
};

const result: object = {
  values: [GameResult.PLAYER_ONE, GameResult.PLAYER_TWO, GameResult.DRAW],
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

export default mongoose.model<IGame>('Game', GameSchema);
