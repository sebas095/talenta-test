import { Request, Response, NextFunction } from 'express';
import { TError, defaultError } from '@utils/constants';

const errorMiddleware = (
  err: TError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (err) {
    const statusCode: number = err.statusCode || defaultError.statusCode;

    res.status(statusCode).json({
      id: err.id || defaultError.id,
      statusCode,
      message: err.message || defaultError.message,
    });
  } else {
    next();
  }
};

export default errorMiddleware;
