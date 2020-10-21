import { Router } from 'express';
import { GameController } from '../controllers';
import { container } from '../config/container';

const gameController: GameController = container.resolve('GameController');

export default (app: Router, mountPoint: string) => {
  const router: Router = Router();

  // routes
  router.get('/', gameController.getAll);
  router.get('/:gameId', gameController.get);

  app.use(mountPoint, router);
};
