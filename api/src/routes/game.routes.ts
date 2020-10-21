import { Router } from 'express';
import { GameController } from '../controllers';
import { container } from '../config/container';

const gameController: GameController = container.resolve('GameController');

export default (app: Router, mountPoint: string): void => {
  const router: Router = Router();

  // routes
  router.get('/', gameController.getAll);
  router.get('/stats', gameController.stats);
  router.get('/:gameId', gameController.get);

  router.patch('/:gameId', gameController.update);

  app.use(mountPoint, router);
};
