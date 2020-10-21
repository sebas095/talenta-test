import { BaseRepository } from './base.repository';
import { Game } from '../models';

import { IGame } from '../models/game.model';
import { Model } from 'mongoose';

class GameRepository extends BaseRepository {
  private gameModel: Model<IGame>;

  constructor(Game: Model<IGame>) {
    super(Game);
    this.gameModel = Game;
  }
}

export default new GameRepository(Game);
