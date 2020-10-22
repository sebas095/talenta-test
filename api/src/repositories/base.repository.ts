import { Model, Document } from 'mongoose';

class BaseRepository {
  private model: Model<Document>;

  constructor(model: Model<Document>) {
    this.model = model;
  }

  async get(id: string): Promise<Document | null> {
    return await this.model.findById(id);
  }

  async getBy(filter: Record<string, unknown>): Promise<Document[] | null> {
    return await this.model.find(filter).sort({ createdAt: -1 }); // DESC
  }

  async getAll(): Promise<Document[] | null> {
    return await this.model.find({}).sort({ createdAt: -1 }); // DESC
  }

  async create(entity: Record<string, unknown>): Promise<Document | null> {
    return await this.model.create(entity);
  }

  async update(
    id: string,
    entity: Record<string, unknown>,
  ): Promise<Document | null> {
    return await this.model.findByIdAndUpdate(id, entity, { new: true });
  }

  async delete(id: string): Promise<boolean> {
    await this.model.findByIdAndDelete(id);
    return true;
  }
}

export { BaseRepository };
