import supertest from 'supertest';
import mongoose from 'mongoose';

import app from '@app';
import { GameModelMock } from '@mocks';
import { ErrorValue, GameStatus, Players } from '@utils/constants';

const request = supertest(app);
const BASE_URL = '/v1/api';

describe('Game Routes Tests', () => {
  beforeAll(async () => {
    try {
      const MONGO_URL: string = process.env.MONGO_URL as string;
      await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  });

  beforeEach(async () => {
    for (const collection in mongoose.connection.collections) {
      const documents = await mongoose.connection.collections[
        collection
      ].countDocuments();

      if (documents > 0) {
        await mongoose.connection.collections[collection].drop();
      }
    }
  });

  afterAll(async () => {
    await mongoose.disconnect();
    mongoose.models = {};
  });

  it('Should return a not found message', async () => {
    const { body, status } = await request.get(`${BASE_URL}/test`);
    expect(status).toBe(404);
    expect(body).toMatchObject(ErrorValue.NOT_FOUND);
  });

  it('Should return a bad request message', async () => {
    const { body, status } = await request.get(`${BASE_URL}/game/test`);
    expect(status).toBe(400);
    expect(body).toHaveProperty('id', ErrorValue.BAD_REQUEST.id);
    expect(body).toHaveProperty(
      'statusCode',
      ErrorValue.BAD_REQUEST.statusCode,
    );

    expect(body).toHaveProperty('message');
    expect(body.message.includes(ErrorValue.BAD_REQUEST.message)).toBe(true);
  });

  it('Should save a game to database', async () => {
    const { body, status } = await request.post(`${BASE_URL}/game`);
    expect(status).toBe(200);
    expect(body).toHaveProperty('_id');
    expect(body).toHaveProperty('status', GameStatus.STARTED);
    expect(body).toHaveProperty('turn', Players.PLAYER_ONE);
    expect(body).toHaveProperty('board');
    expect(body.board.length).toBe(9);
  });

  it('Should update a game to database', async () => {
    const { body: game } = await request.post(`${BASE_URL}/game`);
    const { body, status } = await request
      .patch(`${BASE_URL}/game/${game._id}`)
      .set('Accept', 'application/json')
      .send({ turn: Players.PLAYER_TWO });

    expect(status).toBe(200);
    expect(body).toHaveProperty('_id', game._id);
    expect(game).toHaveProperty('turn', Players.PLAYER_ONE);
    expect(body).toHaveProperty('turn', Players.PLAYER_TWO);
  });

  it('Should not update a finished game to database', async () => {
    const { body: game } = await request
      .post(`${BASE_URL}/game`)
      .set('Accept', 'application/json')
      .send({ status: GameStatus.GAME_OVER });

    const { body, status } = await request
      .patch(`${BASE_URL}/game/${game._id}`)
      .set('Accept', 'application/json')
      .send({ turn: Players.PLAYER_TWO });

    expect(status).toBe(200);
    expect(body).toHaveProperty('_id', game._id);
    expect(game).toHaveProperty('turn', Players.PLAYER_ONE);
    expect(body).toHaveProperty('turn', Players.PLAYER_ONE);
  });

  it('Should find a game by id', async () => {
    const { body: game } = await request.post(`${BASE_URL}/game`);
    const { body, status } = await request.get(`${BASE_URL}/game/${game._id}`);
    expect(status).toBe(200);
    expect(body).toHaveProperty('_id', game._id);
    expect(body).toHaveProperty('status', GameStatus.STARTED);
  });

  it('Should list all games', async () => {
    const { games } = GameModelMock;
    const { body: game1 } = await request
      .post(`${BASE_URL}/game`)
      .set('Accept', 'application/json')
      .send(games[0]);

    const { body: game2 } = await request
      .post(`${BASE_URL}/game`)
      .set('Accept', 'application/json')
      .send(games[1]);

    const { body: game3 } = await request
      .post(`${BASE_URL}/game`)
      .set('Accept', 'application/json')
      .send(games[2]);

    const { body: game4 } = await request
      .post(`${BASE_URL}/game`)
      .set('Accept', 'application/json')
      .send(games[3]);

    const { body, status } = await request.get(`${BASE_URL}/game`);

    expect(status).toBe(200);
    expect(body).toHaveProperty('started');
    expect(body.started).toHaveLength(1);
    expect(body.started[0]).toMatchObject(game4);

    expect(body).toHaveProperty('finished');
    expect(body.finished.wons).toHaveLength(2);
    expect(body.finished.wons[0]).toMatchObject(game3);
    expect(body.finished.wons[1]).toMatchObject(game1);

    expect(body.finished.tied).toHaveLength(1);
    expect(body.finished.tied[0]).toMatchObject(game2);
  });

  it('Should show a game stats', async () => {
    const { games, stats } = GameModelMock;
    await request
      .post(`${BASE_URL}/game`)
      .set('Accept', 'application/json')
      .send(games[0]);

    await request
      .post(`${BASE_URL}/game`)
      .set('Accept', 'application/json')
      .send(games[1]);

    await request
      .post(`${BASE_URL}/game`)
      .set('Accept', 'application/json')
      .send(games[2]);

    await request
      .post(`${BASE_URL}/game`)
      .set('Accept', 'application/json')
      .send(games[3]);

    const { body, status } = await request.get(`${BASE_URL}/game/stats`);

    expect(status).toBe(200);
    expect(body).toMatchObject(stats);
  });
});
