/* eslint-disable @typescript-eslint/no-explicit-any */
import { GameService } from '@services';
import { GameModelMock, GameRepositoryMock } from '@mocks';

import { Players, GameStatus } from '@utils/constants';

describe('Game Service Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should find a game by id', async () => {
    const GameRepository = GameRepositoryMock as any;
    const { game } = GameModelMock;
    GameRepository.get.mockReturnValue(game);

    const _gameService: GameService = new GameService({ GameRepository });
    const expected = await _gameService.get(game._id);

    expect(expected).toMatchObject(game);
  });

  it('Should return a game collection', async () => {
    const GameRepository = GameRepositoryMock as any;
    const { games } = GameModelMock;
    GameRepository.getAll.mockReturnValue(games);

    const _gameService: GameService = new GameService({ GameRepository });
    const expected = await _gameService.getAll();

    expect(expected).toMatchObject(games);
  });

  it('Should return a classified game list', async () => {
    const GameRepository = GameRepositoryMock as any;
    const { games } = GameModelMock;
    GameRepository.getAll.mockReturnValue(games);

    const _gameService: GameService = new GameService({ GameRepository });
    await _gameService.listGames();

    expect(GameRepository.getAll).toBeCalledTimes(1);
  });

  it('Should not update a finished game', async () => {
    const GameRepository = GameRepositoryMock as any;
    const { game } = GameModelMock;

    GameRepository.update.mockReturnValue(game);
    GameRepository.get.mockReturnValue(game);

    const _gameService: GameService = new GameService({ GameRepository });
    const expected = await _gameService.updateGame(game._id, {
      turn: Players.PLAYER_ONE,
    });

    expect(GameRepository.get).toBeCalledTimes(1);
    expect(GameRepository.update).toBeCalledTimes(0);
    expect(expected).toMatchObject(game);
  });

  it('Should update an specific game by id', async () => {
    const GameRepository = GameRepositoryMock as any;
    const { game } = GameModelMock;
    game.status = GameStatus.STARTED;

    GameRepository.update.mockReturnValue(game);
    GameRepository.get.mockReturnValue(game);

    const _gameService: GameService = new GameService({ GameRepository });
    const expected = await _gameService.updateGame(game._id, {
      turn: Players.PLAYER_ONE,
    });

    expect(GameRepository.get).toBeCalledTimes(1);
    expect(GameRepository.update).toBeCalledTimes(1);
    expect(expected).toMatchObject(game);
  });

  it('Should return a game object', async () => {
    const GameRepository = GameRepositoryMock as any;
    const { game } = GameModelMock;
    GameRepository.create.mockReturnValue(game);

    const _gameService: GameService = new GameService({ GameRepository });
    const expected = await _gameService.create(game);

    expect(expected).toMatchObject(game);
  });

  it('Should return a game stats', async () => {
    const GameRepository = GameRepositoryMock as any;
    const { games, stats } = GameModelMock;
    GameRepository.getAll.mockReturnValue(games);

    const _gameService: GameService = new GameService({ GameRepository });
    const expected = await _gameService.stats();

    expect(GameRepository.getAll).toBeCalledTimes(1);
    expect(expected).toMatchObject(stats);
  });
});
