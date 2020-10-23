import ApiService from '@services/api.service';

const useCreateGame = ({ setError, setGame, game, body }) => async () => {
  const data = await ApiService.createGame(body || game);

  if (data.message) {
    setError(data.message);
  } else {
    setGame({ ...game, ...data, gameId: data._id });
    localStorage.setItem('gameId', data._id);
  }
};

export default useCreateGame;
