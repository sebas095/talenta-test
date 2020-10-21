import { BaseRepository } from '../repositories/base.repository';
import { Document } from 'mongoose';

import { TError, ErrorType, ErrorValue } from '../utils/constants';
import { formatError } from '../utils/formatter';

class BaseService {
  private repository: BaseRepository;

  constructor(repository: BaseRepository) {
    this.repository = repository;
  }

  async get(id: string): Promise<Document> {
    if (!id) {
      const error: TError = formatError(
        ErrorType.BAD_REQUEST,
        ErrorValue.BAD_REQUEST.statusCode,
        `${ErrorValue.BAD_REQUEST.message}. Se debe enviar el ID`,
      );
      throw error;
    }

    const currentEntity = await this.repository.get(id);
    if (!currentEntity) {
      const error: TError = formatError(
        ErrorType.NOT_FOUND,
        ErrorValue.NOT_FOUND.statusCode,
        ErrorValue.NOT_FOUND.message,
      );
      throw error;
    }

    return currentEntity;
  }

  async getAll(): Promise<Document[] | null> {
    return await this.repository.getAll();
  }

  async create(entity: Record<string, unknown>): Promise<Document | null> {
    return await this.repository.create(entity);
  }

  async update(
    id: string,
    entity: Record<string, unknown>,
  ): Promise<Document | null> {
    if (!id) {
      const error: TError = formatError(
        ErrorType.BAD_REQUEST,
        ErrorValue.BAD_REQUEST.statusCode,
        `${ErrorValue.BAD_REQUEST.message}. Se debe enviar el ID`,
      );
      throw error;
    }

    return await this.repository.update(id, entity);
  }

  async delete(id: string): Promise<boolean> {
    if (!id) {
      const error: TError = formatError(
        ErrorType.BAD_REQUEST,
        ErrorValue.BAD_REQUEST.statusCode,
        `${ErrorValue.BAD_REQUEST.message}. Se debe enviar el ID`,
      );
      throw error;
    }

    return await this.repository.delete(id);
  }
}

export { BaseService };
