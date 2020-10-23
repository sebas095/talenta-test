import { defaultError } from '@utils/constants';

const { API_ENDPOINT } = process.env;

class ApiService {
  static async getStats() {
    try {
      const response = await fetch(`${API_ENDPOINT}/game/stats`);
      const stats = await response.json();
      return stats;
    } catch (err) {
      return defaultError;
    }
  }

  static async listGames() {
    try {
      const response = await fetch(`${API_ENDPOINT}/game`);
      const games = await response.json();
      return games;
    } catch (err) {
      return defaultError;
    }
  }

  static async getGame(gameId) {
    try {
      const response = await fetch(`${API_ENDPOINT}/game/${gameId}`);
      const game = await response.json();
      return game;
    } catch (err) {
      return defaultError;
    }
  }

  static async createGame(body) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(`${API_ENDPOINT}/game`, requestOptions);
      const game = await response.json();
      return game;
    } catch (err) {
      return defaultError;
    }
  }

  static async updateGame(gameId, body) {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(
        `${API_ENDPOINT}/game/${gameId}`,
        requestOptions,
      );
      const game = await response.json();
      return game;
    } catch (err) {
      return defaultError;
    }
  }
}

export default ApiService;
