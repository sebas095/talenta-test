import { Request, Response } from 'express';
import { ErrorValue } from '../utils/constants';

const notFoundMiddleware = (req: Request, res: Response): void => {
  res.status(ErrorValue.NOT_FOUND.statusCode).json(ErrorValue.NOT_FOUND);
};

export default notFoundMiddleware;
