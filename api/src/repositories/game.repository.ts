import { BaseRepository } from './base.repository';
import { Game, IGame } from '../models';
import { Model } from 'mongoose';

export class GameRepository extends BaseRepository {
  private gameModel: Model<IGame>;

  constructor(Game: Model<IGame>) {
    super(Game);
    this.gameModel = Game;
  }
}

export default new GameRepository(Game);
