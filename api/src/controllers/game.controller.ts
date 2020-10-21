import { IGame } from '../models';
import { Request, Response } from 'express';
import { GameService } from '../services';

let _gameService: GameService;

class GameController {
  constructor({ GameService }: { GameService: GameService }) {
    _gameService = GameService;
  }

  async get(req: Request, res: Response): Promise<Response<IGame>> {
    const { gameId } = req.params;
    const game: IGame = (await _gameService.get(gameId)) as IGame;
    return res.json(game);
  }

  async getAll(req: Request, res: Response): Promise<Response<IGame[]>> {
    const games: IGame[] = (await _gameService.getAll()) as IGame[];
    return res.json(games);
  }
}

export default GameController;
