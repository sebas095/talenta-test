import { BaseService } from './base.service';
import { GameRepository } from '../repositories';

let _gameRepository: GameRepository;

class GameService extends BaseService {
  constructor({ GameRepository }: { GameRepository: GameRepository }) {
    super(GameRepository);
    _gameRepository = GameRepository;
  }
}

export default GameService;
