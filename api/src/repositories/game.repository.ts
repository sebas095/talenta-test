import { BaseRepository } from './base.repository';
import { IGame } from '@models';
import { Model } from 'mongoose';

let _gameModel: Model<IGame>;

class GameRepository extends BaseRepository {
  constructor({ Game }: { Game: Model<IGame> }) {
    super(Game);
    _gameModel = Game;
  }
}

export default GameRepository;
