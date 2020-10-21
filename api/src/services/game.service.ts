import { BaseService } from './base.service';
import { GameRepository } from '../repositories';
import { IGame } from '../models';
import { GameStatus, GameResult } from '../utils/constants';

let _gameRepository: GameRepository;

class GameService extends BaseService {
  constructor({ GameRepository }: { GameRepository: GameRepository }) {
    super(GameRepository);
    _gameRepository = GameRepository;
  }

  async listGames(): Promise<IGameList> {
    const games: IGame[] = (await _gameRepository.getAll()) as IGame[];
    const started: IGame[] = games.filter(
      game => game.status === GameStatus.STARTED,
    );
    const finished: IGame[] = games.filter(
      game => game.status === GameStatus.GAME_OVER,
    );

    const wons: IGame[] = [];
    const tied: IGame[] = [];

    finished.forEach(game => {
      if (game.winner === GameResult.DRAW) tied.push(game);
      else wons.push(game);
    });

    return { started, finished: { wons, tied } };
  }

  async stats(): Promise<IGameStats> {
    const games: IGame[] = (await _gameRepository.getAll()) as IGame[];
    const finished: IGame[] = games.filter(
      game => game.status === GameStatus.GAME_OVER,
    );

    let playerOne = 0;
    let playerTwo = 0;

    finished.forEach(game => {
      if (game.winner === GameResult.PLAYER_ONE) playerOne++;
      if (game.winner === GameResult.PLAYER_TWO) playerTwo++;
    });

    return { playerOne, playerTwo };
  }
}

export interface IGameStats {
  playerOne: number;
  playerTwo: number;
}

export interface IGameList {
  started: IGame[];
  finished: {
    wons: IGame[];
    tied: IGame[];
  };
}

export default GameService;
