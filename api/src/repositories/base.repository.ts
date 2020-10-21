import { Model, Document } from 'mongoose';

class BaseRepository {
  private model: Model<Document>;

  constructor(model: Model<Document>) {
    this.model = model;
  }

  async get(id: string) {
    return await this.model.findById(id);
  }

  async getBy(filter: object) {
    return await this.model.find(filter);
  }

  async getAll() {
    return await this.model.find({});
  }

  async create(entity: object) {
    return await this.model.create(entity);
  }

  async update(id: string, entity: object) {
    return await this.model.findByIdAndUpdate(id, entity, { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return true;
  }
}

export { BaseRepository };
