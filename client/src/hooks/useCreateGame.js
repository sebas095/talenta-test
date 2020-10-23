import ApiService from '@services/api.service';

const useCreateGame = ({
  setLoading,
  setError,
  setGame,
  game,
  body,
}) => async () => {
  setLoading(true);
  const data = await ApiService.createGame(body || game);
  setLoading(false);

  if (data.message) {
    setError(data.message);
  } else {
    setGame({ ...game, ...data, gameId: data._id });
    localStorage.setItem('gameId', data._id);
  }
};

export default useCreateGame;
