import { createContainer, asClass, asValue, AwilixContainer } from 'awilix';

// services
import { GameService } from '../services';

// controllers
import { GameController } from '../controllers';

// models
import { Game } from '../models';

// repositories
import { GameRepository } from '../repositories';

const container: AwilixContainer = createContainer();

// register dependency injection
container.register({
  GameController: asClass(GameController).singleton(),
  GameService: asClass(GameService).singleton(),
  GameRepository: asClass(GameRepository).singleton(),
  Game: asValue(Game),
});

export { container };
