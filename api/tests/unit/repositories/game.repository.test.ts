import mockingoose from 'mockingoose';

import { Game } from '@models';
import { GameModelMock } from '@mocks';
import { GameRepository } from '@repositories';

import { Players } from '@utils/constants';

describe('Game Repository Tests', () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it('Should return a game by id', async () => {
    const { game } = GameModelMock;
    mockingoose(Game).toReturn(game, 'findOne');

    const _gameRepository: GameRepository = new GameRepository({ Game });
    const expected = await _gameRepository.get(game._id);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(game);
  });

  it('Should return a game collection', async () => {
    const { games } = GameModelMock;
    mockingoose(Game).toReturn(games, 'find');

    const _gameRepository: GameRepository = new GameRepository({ Game });
    const expected = await _gameRepository.getAll();

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(games);
  });

  it('Should update an especific game by id', async () => {
    const { game } = GameModelMock;
    mockingoose(Game).toReturn(game, 'findOneAndUpdate');

    const _gameRepository: GameRepository = new GameRepository({ Game });
    const expected = await _gameRepository.update(game._id, {
      turn: Players.PLAYER_ONE,
    });

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(game);
  });
});
