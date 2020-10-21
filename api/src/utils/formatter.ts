import { ErrorType, TError } from './constants';

export const formatError = (
  id: ErrorType,
  statusCode: number,
  message: string,
): TError => {
  const error: TError = new Error() as TError;

  error.id = id;
  error.statusCode = statusCode;
  error.message = message;

  return error;
};
