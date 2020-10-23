import { Request, Response } from 'express';

import { IGame } from '@models';
import { GameService, IGameList, IGameStats } from '@services';

let _gameService: GameService;

class GameController {
  constructor({ GameService }: { GameService: GameService }) {
    _gameService = GameService;
  }

  async create(req: Request, res: Response): Promise<Response<IGame>> {
    const { body } = req;
    const game: IGame = (await _gameService.create(body)) as IGame;
    return res.json(game);
  }

  async get(req: Request, res: Response): Promise<Response<IGame>> {
    const { gameId } = req.params;
    const game: IGame = (await _gameService.get(gameId)) as IGame;
    return res.json(game);
  }

  async getAll(req: Request, res: Response): Promise<Response<IGameList>> {
    const games: IGameList = await _gameService.listGames();
    return res.json(games);
  }

  async stats(req: Request, res: Response): Promise<Response<IGameStats>> {
    const stats: IGameStats = await _gameService.stats();
    return res.json(stats);
  }

  async update(req: Request, res: Response): Promise<Response<IGame>> {
    const { gameId } = req.params;
    const { body } = req;
    const game: IGame = (await _gameService.updateGame(gameId, body)) as IGame;
    return res.json(game);
  }
}

export default GameController;
