import { BaseService } from './base.service';
import { GameRepository, TGameRepository } from '../repositories';

export class GameService extends BaseService {
  private gameRepository: TGameRepository;

  constructor(GameRepository: TGameRepository) {
    super(GameRepository);
    this.gameRepository = GameRepository;
  }
}

export default new GameService(GameRepository);
